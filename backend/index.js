const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

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

// POST /api/generate-story
app.post('/api/generate-story', (req, res) => {
  const { adventureType, character, location } = req.body || {};

  const char = character || 'Leo the Brave Bear';
  const loc = location || 'The Enchanted Castle';
  const adv = adventureType || 'Magic Forest';

  const story = generateCustomStory(adv, char, loc);
  const title = generateTitle(char, loc, adv);
  const imageCategory = getImageCategory(char);

  return res.json({
    success: true,
    title: title,
    story: story,
    imageCategory: imageCategory,
    adventureType: adv,
    character: char,
    location: loc
  });
});

// Root endpoint check
app.get('/', (req, res) => {
  res.send('Story Magic API Server is active and running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Story Magic Backend running on http://localhost:${PORT}`);
});
