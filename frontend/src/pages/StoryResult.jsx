import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FAVORITES_STORAGE_KEY = 'storyMagicFavorites';

export default function StoryResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Safely extract story data passed from Home.jsx via navigate('/story', { state: { story: data } })
  const storyData = location.state?.story;

  // Extract dynamic title with fallback 'My Magical Adventure'
  const title =
    storyData?.title ||
    location.state?.title ||
    "My Magical Adventure";

  // Extract dynamic story text
  const storyText = typeof storyData === 'string'
    ? storyData
    : storyData?.story || storyData?.text ||
      "Once upon a time, in a magical forest that glowed with star-light, lived a very brave bear named Leo. Leo loved to explore. One sunny day, Leo found a shimmering key and a map. The map showed a path past the giggling brook and over the whispy cloud hills. With his friends, the friendly dragon and wise owl, Leo set off on an adventure. They discovered a hidden castle made of rainbow stone. Leo used the key, and inside, they found a chest full of glowing story seeds that would make stories grow all over the forest! Leo and his friends shared the stories, and everyone in the forest lived happily ever after.";

  const imageCategory = typeof storyData === 'object' ? storyData?.imageCategory : null;
  const character = typeof storyData === 'object' ? storyData?.character : null;

  // Map imageCategory / character to matching illustration
  const getImageForCategory = (cat, char) => {
    const categoryStr = (cat || '').toLowerCase();
    const charStr = (char || '').toLowerCase();

    if (categoryStr.includes('dragon') || charStr.includes('dragon')) {
      return '/story_dragon_adventure.jpg';
    }
    if (categoryStr.includes('owl') || charStr.includes('owl')) {
      return '/story_owl_adventure.jpg';
    }
    if (categoryStr.includes('bunny') || charStr.includes('bunny') || charStr.includes('rabbit')) {
      return '/story_bunny_adventure.jpg';
    }
    if (categoryStr.includes('penguin') || charStr.includes('penguin')) {
      return '/story_penguin_adventure.jpg';
    }
    // Default to bear illustration
    return '/story_bear_adventure.jpg';
  };

  const imageSrc = getImageForCategory(imageCategory, character);

  const favoriteStory = {
    title,
    story: storyText,
    imageCategory,
    character,
    location: typeof storyData === 'object' ? storyData?.location : null,
  };

  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]');
    setIsFavorite(savedStories.some((story) => story.title === title && story.story === storyText));
  }, [title, storyText]);

  const handleFavorite = () => {
    const savedStories = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]');
    const storyIndex = savedStories.findIndex((story) => story.title === title && story.story === storyText);

    if (storyIndex >= 0) {
      savedStories.splice(storyIndex, 1);
      setIsFavorite(false);
    } else {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([favoriteStory, ...savedStories]));
      setIsFavorite(true);
      return;
    }

    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(savedStories));
  };

  const handleReadAloud = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(storyText);
        utterance.rate = 0.9;
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="story-page min-h-[calc(100vh-4rem)] relative overflow-hidden font-['Fredoka',sans-serif] flex flex-col items-center justify-between p-4 md:p-8">
      {/* Background Stars & Sparkles */}
      <div className="absolute top-8 left-12 text-yellow-300 text-2xl animate-pulse pointer-events-none">✦</div>
      <div className="absolute top-24 left-[18%] text-yellow-300 text-xl pointer-events-none">✨</div>
      <div className="absolute top-12 right-[15%] text-yellow-300 text-3xl animate-bounce pointer-events-none">★</div>
      <div className="absolute top-36 right-10 text-yellow-200 text-2xl pointer-events-none">✦</div>
      <div className="absolute bottom-36 left-12 text-yellow-300 text-xl pointer-events-none">✨</div>

      {/* Floating Clouds Background */}
      <div className="absolute top-16 left-8 text-white/80 pointer-events-none">
        <svg className="w-28 h-18" viewBox="0 0 100 60" fill="currentColor">
          <path d="M20 45 C10 45 5 35 15 25 C15 15 30 10 45 20 C55 10 75 10 80 25 C90 25 95 35 85 45 Z" />
        </svg>
      </div>
      <div className="absolute top-28 right-8 text-white/80 pointer-events-none">
        <svg className="w-32 h-20" viewBox="0 0 100 60" fill="currentColor">
          <path d="M20 45 C10 45 5 35 15 25 C15 15 30 10 45 20 C55 10 75 10 80 25 C90 25 95 35 85 45 Z" />
        </svg>
      </div>

      {/* Header Title Section */}
      <header className="relative z-10 my-4 flex items-center justify-center gap-3">
        <div className="relative">
          <svg className="w-12 h-12 md:w-14 md:h-14 text-indigo-700 drop-shadow-md" viewBox="0 0 64 64" fill="none">
            <ellipse cx="32" cy="52" rx="28" ry="8" fill="#5B21B6" />
            <ellipse cx="32" cy="52" rx="28" ry="8" stroke="#3730A3" strokeWidth="3" />
            <path d="M14 50 L32 10 L48 48 C40 54 24 54 14 50 Z" fill="#6366F1" />
            <path d="M18 45 C26 49 38 49 46 45 L47 49 C39 53 25 53 17 49 Z" fill="#F59E0B" />
            <polygon points="32,20 34,26 40,26 35,30 37,36 32,32 27,36 29,30 24,26 30,26" fill="#FBBF24" />
          </svg>
          <span className="absolute -top-1 -right-2 text-yellow-300 text-lg">✨</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-wider flex items-center gap-2 select-none">
          <span className="text-[#38BDF8] drop-shadow-[0_4px_0_#1E295B] text-stroke-white">STORY</span>
          <span className="bg-gradient-to-b from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_4px_0_#1E295B] text-stroke-white">MAGIC</span>
        </h1>
      </header>

      {/* Open Storybook Main Container */}
      <main className="relative z-10 w-full max-w-5xl bg-white rounded-[40px] shadow-[0_16px_50px_rgba(0,0,0,0.15)] border-4 border-white my-auto p-6 md:p-10">
        
        {/* Book Central Spine Lines & Folds */}
        <div className="absolute left-1/2 top-6 bottom-6 w-1 -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden md:block pointer-events-none"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative z-10">
          
          {/* Left Book Page: Story Illustration & Read Aloud Button */}
          <div className="flex flex-col items-center justify-between gap-6 md:pr-6 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0">
            
            {/* Story Illustration Image */}
            <div className="w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-4 border-purple-100 shadow-md">
              <img
                src={imageSrc}
                alt={character || 'Story Illustration'}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Read Aloud Button */}
            <button
              onClick={handleReadAloud}
              className="w-full max-w-sm bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xl py-3.5 px-6 rounded-full shadow-[0_6px_0_#15803D] border-2 border-green-200 cursor-pointer flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:translate-y-1 active:shadow-none select-none"
            >
              <span>{isPlaying ? 'Pause Reading ⏸' : 'Read Aloud'}</span>
              <span className="text-2xl">🔊</span>
            </button>
          </div>

          {/* Right Book Page: Dynamic Story Title, Text & Create Another Story Button */}
          <div className="flex flex-col justify-between items-start gap-6 md:pl-6">
            
            {/* Story Content */}
            <div className="w-full flex flex-col items-start">
              {/* Dynamic Title Header */}
              <h2 className="text-2xl md:text-3xl font-black text-[#1E295B] mb-4 tracking-wide">
                {title}
              </h2>

              {/* Dynamic Story Text */}
              <div className="text-gray-700 text-base md:text-lg leading-relaxed font-medium max-h-[340px] overflow-y-auto pr-2">
                <p>{storyText}</p>
              </div>
            </div>

            <div className="mt-2 flex w-full flex-col gap-3">
              <button
                onClick={handleFavorite}
                className={`w-full rounded-full border-2 py-3.5 px-6 text-xl font-extrabold text-white shadow-[0_6px_0_#BE185D] transition-all hover:scale-[1.02] active:translate-y-1 active:shadow-none ${isFavorite ? 'bg-pink-600 border-pink-300' : 'bg-pink-400 border-pink-200 hover:bg-pink-500'}`}
              >
                <span>{isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}</span>
                <span className="ml-2 text-2xl">{isFavorite ? '♥' : '♡'}</span>
              </button>

              <button
                onClick={() => navigate('/')}
                className="w-full rounded-full border-2 border-amber-200 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 py-3.5 px-6 text-xl font-extrabold text-white shadow-[0_6px_0_#C2410C] transition-all hover:scale-[1.02] hover:from-amber-500 hover:to-red-600 active:translate-y-1 active:shadow-none"
              >
                <span>Create Another Story</span>
                <span className="ml-2 text-2xl">🪄</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Outer Scene Decorations (Bottom Left & Right) */}
      <div className="w-full max-w-6xl flex justify-between items-end pointer-events-none relative z-0 -mt-12 px-4">
        
        {/* Left Side: Rainbow on clouds */}
        <div className="flex flex-col items-start">
          <div className="relative">
            <svg className="w-32 h-20 md:w-44 md:h-28" viewBox="0 0 100 60" fill="none">
              <path d="M10 50 A 40 40 0 0 1 90 50" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
              <path d="M16 50 A 34 34 0 0 1 84 50" stroke="#F97316" strokeWidth="6" strokeLinecap="round" />
              <path d="M22 50 A 28 28 0 0 1 78 50" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" />
              <path d="M28 50 A 22 22 0 0 1 72 50" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" />
              <path d="M34 50 A 16 16 0 0 1 66 50" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Right Side: Tree and Cute Owl */}
        <div className="flex items-end gap-2">
          <div className="w-14 h-20 md:w-20 md:h-28">
            <svg viewBox="0 0 60 90" fill="none">
              <rect x="25" y="55" width="10" height="35" rx="3" fill="#78350F" />
              <circle cx="30" cy="40" r="25" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
              <circle cx="20" cy="30" r="18" fill="#4ADE80" />
            </svg>
          </div>

          <div className="w-12 h-14 md:w-16 md:h-18 -ml-4">
            <svg viewBox="0 0 60 70" fill="none">
              <ellipse cx="30" cy="42" rx="20" ry="22" fill="#9A3412" stroke="#451A03" strokeWidth="2" />
              <ellipse cx="30" cy="45" rx="14" ry="15" fill="#FDE68A" />
              <circle cx="22" cy="30" r="8" fill="white" stroke="#451A03" strokeWidth="2" />
              <circle cx="38" cy="30" r="8" fill="white" stroke="#451A03" strokeWidth="2" />
              <circle cx="22" cy="30" r="4" fill="#1E295B" />
              <circle cx="38" cy="30" r="4" fill="#1E295B" />
              <polygon points="30,34 26,40 34,40" fill="#F59E0B" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
