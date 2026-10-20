const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const supabase = require('./supabaseClient');
const { generateAIStory } = require('./aiStoryService');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

/**
 * Helper function to determine image category string based on chosen character
 */
function getImageCategory(character) {
  if (!character) return 'bear';
  const charLower = character.toLowerCase();
  if (charLower.includes('bear')) return 'bear';
  if (charLower.includes('dragon')) return 'dragon';
  if (charLower.includes('owl')) return 'owl';
  if (charLower.includes('bunny') || charLower.includes('rabbit')) return 'bunny';
  if (charLower.includes('penguin')) return 'penguin';
  if (charLower.includes('wizard')) return 'wizard';
  return 'bear';
}

/**
 * Helper function to generate a dynamic story title matching the specific story theme
 */
function generateTitle(character, location, adventureType) {
  const char = character && character.trim() ? character.trim() : 'Leo the Brave Bear';
  const loc = location && location.trim() ? location.trim() : 'The Enchanted Castle';
  const adv = (adventureType || '').toLowerCase();

  if (adv.includes('treasure')) {
    return `${char} and the Secret Treasure of ${loc}`;
  }
  if (adv.includes('space')) {
    return `${char}'s Galactic Voyage to ${loc}`;
  }
  if (adv.includes('underwater') || adv.includes('ocean')) {
    return `${char} and the Whispering Ocean of ${loc}`;
  }
  if (adv.includes('riddle') || adv.includes('mystery')) {
    return `${char} and the Hidden Riddle of ${loc}`;
  }
  if (adv.includes('forest')) {
    return `${char} and the Enchanted Wonders of ${loc}`;
  }

  return `The Great ${adventureType || 'Magical'} Journey of ${char}`;
}

/**
 * Dynamically generates a customized 3-sentence children's story
 * based on adventureType, character, and location.
 */
function generateCustomStory(adventureType, character, location) {
  const char = character && character.trim() ? character.trim() : 'a brave little hero';
  const loc = location && location.trim() ? location.trim() : 'a magical realm';
  const advType = adventureType && adventureType.trim() ? adventureType.trim() : 'Magic Forest';

  const advLower = advType.toLowerCase();

  let sentence1, sentence2, sentence3;

  if (advLower.includes('treasure')) {
    sentence1 = `Once upon a time, ${char} embarked on an exciting treasure hunt through ${loc}.`;
    sentence2 = `Guided by a glowing magical compass, ${char} solved ancient clues and found a chest filled with twinkling jewels and happy memories.`;
    sentence3 = `With a giant smile, ${char} shared the sparkling treasures with all the friendly creatures of ${loc}.`;
  } else if (advLower.includes('space')) {
    sentence1 = `High above the clouds, ${char} zoomed into outer space on a galactic journey starting from ${loc}.`;
    sentence2 = `Floating past shimmering stars and friendly alien friends, ${char} discovered a brand-new planet glowing with rainbow lights.`;
    sentence3 = `After planting a sparkly flag of friendship, ${char} returned safely home with tales of endless cosmic wonders.`;
  } else if (advLower.includes('underwater') || advLower.includes('ocean')) {
    sentence1 = `Diving deep beneath the gentle waves near ${loc}, ${char} went on a magical underwater voyage.`;
    sentence2 = `Swimming alongside playful dolphins and glowing sea turtles, ${char} uncovered a secret coral kingdom overflowing with glowing pearl flowers.`;
    sentence3 = `With a happy heart, ${char} promised to protect the beautiful ocean realm forever and ever.`;
  } else if (advLower.includes('riddle') || advLower.includes('mystery')) {
    sentence1 = `One sunny morning, ${char} set out to solve a fun mystery riddle echoing all around ${loc}.`;
    sentence2 = `By paying close attention to sparkling clues and asking wise friends, ${char} unraveled the grand puzzle in no time.`;
    sentence3 = `Everyone in ${loc} cheered loudly for ${char}, celebrating the cleverest adventurer in the whole world!`;
  } else {
    // Default / Magic Forest
    sentence1 = `Once upon a time, ${char} ventured into ${loc} for a grand ${advType} adventure.`;
    sentence2 = `Along the winding paths filled with sparkling fairy dust, ${char} met wonderful companions who shared magical secrets.`;
    sentence3 = `Together, they filled ${loc} with laughter and joy, living happily ever after in their wondrous magical world.`;
  }

  return `${sentence1} ${sentence2} ${sentence3}`;
}

// POST /api/generate-story - Generates a story using AI (Gemini/OpenAI) and saves it to Supabase
app.post('/api/generate-story', async (req, res) => {
  try {
    const { adventureType, character, location } = req.body || {};

    const char = character || 'Leo the Brave Bear';
    const loc = location || 'The Enchanted Castle';
    const adv = adventureType || 'Magic Forest';

    // 1. Generate story using AI Model (Google Gemini / OpenAI / creative fallback)
    const aiResult = await generateAIStory({
      character: char,
      location: loc,
      adventureType: adv,
    });

    const title = aiResult.title || generateTitle(char, loc, adv);
    const story = aiResult.story;
    const generatedBy = aiResult.generatedBy;
    const imageCategory = getImageCategory(char);

    let savedRecord = null;
    let savedToDb = false;

    // 2. Save generated story to Supabase database
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('stories')
          .insert([
            {
              title: title,
              story: story,
              adventure_type: adv,
              character: char,
              location: loc,
              image_category: imageCategory,
              is_favorite: false
            }
          ])
          .select()
          .single();

        if (!error && data) {
          savedRecord = data;
          savedToDb = true;
          console.log(`💾 [Supabase] Saved AI story "${title}" (ID: ${savedRecord.id}) to database.`);
        } else if (error) {
          console.error('Supabase insert warning:', error.message);
        }
      } catch (dbErr) {
        console.error('Supabase insert error:', dbErr.message);
      }
    }

    return res.json({
      success: true,
      id: savedRecord ? savedRecord.id : undefined,
      title: title,
      story: story,
      imageCategory: imageCategory,
      adventureType: adv,
      character: char,
      location: loc,
      savedToDb: savedToDb,
      generatedBy: generatedBy,
      createdAt: savedRecord ? savedRecord.created_at : new Date().toISOString()
    });
  } catch (err) {
    console.error('Error in /api/generate-story:', err);
    return res.status(500).json({ success: false, message: 'Server error generating story' });
  }
});

// GET /api/stories - Fetch all stories from Supabase
app.get('/api/stories', async (req, res) => {
  try {
    if (!supabase) {
      return res.json({
        success: true,
        stories: [],
        source: 'local'
      });
    }

    const { data, error } = await supabase
      .from('stories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase fetch stories error:', error.message);
      return res.status(500).json({ success: false, message: error.message });
    }

    return res.json({
      success: true,
      stories: data || [],
      source: 'supabase'
    });
  } catch (err) {
    console.error('Error in GET /api/stories:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// GET /api/favorites - Fetch all favorite stories from Supabase
app.get('/api/favorites', async (req, res) => {
  try {
    if (!supabase) {
      return res.json({
        success: true,
        favorites: [],
        source: 'local'
      });
    }

    const { data, error } = await supabase
      .from('stories')
      .select('*')
      .eq('is_favorite', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase fetch favorites error:', error.message);
      return res.status(500).json({ success: false, message: error.message });
    }

    return res.json({
      success: true,
      favorites: data || [],
      source: 'supabase'
    });
  } catch (err) {
    console.error('Error in GET /api/favorites:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// PATCH /api/stories/:id/favorite - Toggle or update favorite status
app.patch('/api/stories/:id/favorite', async (req, res) => {
  try {
    const { id } = req.params;
    const { isFavorite } = req.body;

    if (!supabase) {
      return res.json({
        success: true,
        id,
        isFavorite,
        message: 'Supabase not connected. Handled locally.'
      });
    }

    const { data, error } = await supabase
      .from('stories')
      .update({ is_favorite: Boolean(isFavorite) })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase update favorite error:', error.message);
      return res.status(500).json({ success: false, message: error.message });
    }

    return res.json({
      success: true,
      story: data
    });
  } catch (err) {
    console.error('Error in PATCH /api/stories/:id/favorite:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// DELETE /api/stories/:id - Delete story
app.delete('/api/stories/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!supabase) {
      return res.json({ success: true, id, message: 'Supabase not connected.' });
    }

    const { error } = await supabase
      .from('stories')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase delete error:', error.message);
      return res.status(500).json({ success: false, message: error.message });
    }

    return res.json({ success: true, message: 'Story deleted successfully', id });
  } catch (err) {
    console.error('Error in DELETE /api/stories/:id:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Root endpoint check
app.get('/', (req, res) => {
  const geminiConfigured = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '' && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY');
  const openaiConfigured = Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim() !== '' && process.env.OPENAI_API_KEY !== 'YOUR_OPENAI_API_KEY');

  res.json({
    message: 'Story Magic API Server is active and running!',
    supabaseConnected: Boolean(supabase),
    aiEngine: geminiConfigured ? 'Google Gemini' : (openaiConfigured ? 'OpenAI' : 'Built-in Template Fallback'),
    geminiConfigured,
    openaiConfigured
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Story Magic Backend running on http://localhost:${PORT}`);
});
