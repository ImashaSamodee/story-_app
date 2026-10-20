const { GoogleGenAI } = require('@google/genai');
const OpenAI = require('openai');

/**
 * Fallback story generation using creative pre-built dynamic templates
 */
function generateFallbackStory(adventureType, character, location) {
  const char = character && character.trim() ? character.trim() : 'Leo the Brave Bear';
  const loc = location && location.trim() ? location.trim() : 'The Enchanted Castle';
  const adv = adventureType && adventureType.trim() ? adventureType.trim() : 'Magic Forest';

  const advLower = adv.toLowerCase();
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
    sentence1 = `Once upon a time, ${char} ventured into ${loc} for a grand ${adv} adventure.`;
    sentence2 = `Along the winding paths filled with sparkling fairy dust, ${char} met wonderful companions who shared magical secrets.`;
    sentence3 = `Together, they filled ${loc} with laughter and joy, living happily ever after in their wondrous magical world.`;
  }

  const title = `${char}'s Magical ${adv} at ${loc}`;
  const story = `${sentence1} ${sentence2} ${sentence3}`;

  return { title, story, generatedBy: 'template_fallback' };
}

/**
 * Clean and parse JSON safely from model response
 */
function parseJsonFromText(rawText) {
  if (!rawText) throw new Error('Empty response from AI model');
  let cleaned = rawText.trim();
  // Strip markdown code fences if present
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/i, '').replace(/\s*```$/i, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/i, '').replace(/\s*```$/i, '');
  }
  return JSON.parse(cleaned.trim());
}

/**
 * Generate story using Google Gemini API
 */
async function generateWithGemini(apiKey, { character, location, adventureType }) {
  const ai = new GoogleGenAI({ apiKey });
  const prompt = `You are an imaginative children's bedtime story author.
Create a heartwarming, magical, and gentle children's bedtime story (3 to 5 sentences long) with a happy ending.
Target audience: kids aged 4-8.

Main Character: ${character}
Setting / Location: ${location}
Adventure Theme: ${adventureType}

Instructions:
- Return ONLY a valid JSON object matching this schema:
{
  "title": "A fun, magical 4-7 word title",
  "story": "The complete 3 to 5 sentence magical bedtime story."
}`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      temperature: 0.8
    }
  });

  const parsed = parseJsonFromText(response.text);
  if (!parsed.title || !parsed.story) {
    throw new Error('Invalid JSON structure from Gemini');
  }

  return {
    title: parsed.title,
    story: parsed.story,
    generatedBy: 'gemini'
  };
}

/**
 * Generate story using OpenAI API
 */
async function generateWithOpenAI(apiKey, { character, location, adventureType }) {
  const openai = new OpenAI({ apiKey });
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are an imaginative children\'s bedtime story author. Always return valid JSON with "title" and "story" keys.'
      },
      {
        role: 'user',
        content: `Write a delightful, gentle children's bedtime story (3 to 5 sentences) with a happy ending.
Main Character: ${character}
Location: ${location}
Theme: ${adventureType}

Format JSON: {"title": "...", "story": "..."}`
      }
    ],
    response_format: { type: 'json_object' },
    temperature: 0.85
  });

  const content = response.choices?.[0]?.message?.content;
  const parsed = parseJsonFromText(content);
  return {
    title: parsed.title,
    story: parsed.story,
    generatedBy: 'openai'
  };
}

/**
 * Main AI Story Generator:
 * Tries Gemini -> then OpenAI -> then template fallback
 */
async function generateAIStory({ character, location, adventureType }) {
  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  // 1. Try Gemini if configured
  if (geminiKey && geminiKey.trim() !== '' && geminiKey !== 'YOUR_GEMINI_API_KEY') {
    try {
      console.log('🤖 [AI] Generating story with Google Gemini...');
      const result = await generateWithGemini(geminiKey.trim(), { character, location, adventureType });
      console.log('✨ [AI] Story generated successfully with Gemini!');
      return result;
    } catch (err) {
      console.error('⚠️ [AI] Gemini generation failed:', err.message);
    }
  }

  // 2. Try OpenAI if configured
  if (openaiKey && openaiKey.trim() !== '' && openaiKey !== 'YOUR_OPENAI_API_KEY') {
    try {
      console.log('🤖 [AI] Generating story with OpenAI...');
      const result = await generateWithOpenAI(openaiKey.trim(), { character, location, adventureType });
      console.log('✨ [AI] Story generated successfully with OpenAI!');
      return result;
    } catch (err) {
      console.error('⚠️ [AI] OpenAI generation failed:', err.message);
    }
  }

  // 3. Fallback to dynamic template generator
  console.log('ℹ️ [AI] No AI API keys configured or call failed. Using built-in dynamic story generator.');
  return generateFallbackStory(adventureType, character, location);
}

module.exports = {
  generateAIStory,
  generateFallbackStory
};
