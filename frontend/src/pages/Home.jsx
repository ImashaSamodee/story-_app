import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [adventureType, setAdventureType] = useState('Magic Forest');
  const [character, setCharacter] = useState('Leo the Brave Bear');
  const [location, setLocation] = useState('The Enchanted Castle');

  const handleGenerateStory = async () => {
    navigate('/loading');

    try {
      const minimumLoadingTime = new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
      const storyRequest = fetch('http://localhost:5000/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adventureType,
          character,
          location,
        }),
      });

      const [response] = await Promise.all([storyRequest, minimumLoadingTime]);

      if (!response.ok) {
        throw new Error(`Story generation failed with status ${response.status}`);
      }

      const data = await response.json();
      navigate('/story', { state: { story: data } });
    } catch (error) {
      console.error('Error generating story:', error);
      navigate('/', {
        state: { error: 'Could not create your story. Please start the backend and try again.' },
      });
    }
  };

  return (
    <div className="story-page min-h-[calc(100vh-4rem)] relative overflow-hidden font-['Fredoka',sans-serif] flex flex-col items-center justify-between p-4 md:p-8">
      {/* Inline Tailwind‑compatible keyframes for cloud floating */}
      <style>{`
        @keyframes cloudFloat {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(15px); }
        }
      `}</style>

      {/* Absolute Positioned Stars & Sparkles (already twinkling) */}
      <div className="absolute top-6 left-12 text-yellow-300 text-2xl animate-pulse pointer-events-none">✦</div>
      <div className="absolute top-20 left-[20%] text-yellow-300 text-xl pointer-events-none">✨</div>
      <div className="absolute top-12 right-[15%] text-yellow-300 text-3xl animate-bounce pointer-events-none">★</div>
      <div className="absolute top-32 right-10 text-yellow-200 text-2xl pointer-events-none">✦</div>
      <div className="absolute bottom-40 left-10 text-yellow-300 text-xl pointer-events-none">✨</div>
      <div className="absolute bottom-32 right-[25%] text-yellow-300 text-2xl pointer-events-none">★</div>

      {/* Floating Star Cluster - Top Right */}
      <div className="absolute top-20 right-12 flex flex-col items-center gap-1 opacity-90 pointer-events-none">
        <svg className="w-8 h-8 text-amber-400 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="w-5 h-5 text-amber-300 -mr-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* Fluffy Clouds Background Elements – now gently floating */}
      <div className="absolute top-16 left-6 text-white/80 pointer-events-none animate-[cloudFloat_12s_ease-in-out_infinite]">
        <svg className="w-24 h-16" viewBox="0 0 100 60" fill="currentColor">
          <path d="M20 45 C10 45 5 35 15 25 C15 15 30 10 45 20 C55 10 75 10 80 25 C90 25 95 35 85 45 Z" />
        </svg>
      </div>
      <div className="absolute top-20 right-6 text-white/80 pointer-events-none animate-[cloudFloat_12s_ease-in-out_infinite]" style={{ animationDirection: 'reverse' }}>
        <svg className="w-28 h-16" viewBox="0 0 100 60" fill="currentColor">
          <path d="M20 45 C10 45 5 35 15 25 C15 15 30 10 45 20 C55 10 75 10 80 25 C90 25 95 35 85 45 Z" />
        </svg>
      </div>

      {/* Header Title Section */}
      <header className="relative z-10 my-4 flex items-center justify-center gap-3">
        {/* Wizard Hat Icon */}
        <div className="relative">
          <svg className="w-14 h-14 md:w-16 md:h-16 text-indigo-700 drop-shadow-md" viewBox="0 0 64 64" fill="none">
            <ellipse cx="32" cy="52" rx="28" ry="8" fill="#5B21B6" />
            <ellipse cx="32" cy="52" rx="28" ry="8" stroke="#3730A3" strokeWidth="3" />
            <path d="M14 50 L32 10 L48 48 C40 54 24 54 14 50 Z" fill="#6366F1" />
            <path d="M18 45 C26 49 38 49 46 45 L47 49 C39 53 25 53 17 49 Z" fill="#F59E0B" />
            <polygon points="32,20 34,26 40,26 35,30 37,36 32,32 27,36 29,30 24,26 30,26" fill="#FBBF24" />
          </svg>
          <span className="absolute -top-1 -right-2 text-yellow-300 text-xl">✨</span>
        </div>

        {/* Title Text */}
        <h1 className="text-5xl md:text-7xl font-black tracking-wider flex items-center gap-2 select-none font-sans">
          <span className="text-[#38BDF8] drop-shadow-[0_4px_0_#1E295B] text-stroke-white">STORY</span>
          <span className="bg-gradient-to-b from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_4px_0_#1E295B] text-stroke-white">MAGIC</span>
        </h1>
      </header>

      {/* Main Card Container */}
      <main className="relative z-10 w-full max-w-5xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-white/30 p-8 md:p-12 my-6 flex flex-col items-center">
        
        {/* Dragon perched on top-left edge of card */}
        <div className="absolute -top-12 left-6 md:left-10 w-16 h-16 md:w-20 md:h-20 pointer-events-none drop-shadow-lg">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M35 70 C20 70 20 40 40 40 C35 30 50 15 70 25 C85 35 80 65 65 75 C55 80 45 80 35 70 Z" fill="#A78BFA" stroke="#6D28D9" strokeWidth="3" />
            <path d="M45 50 C40 60 50 75 60 70 C65 60 55 50 45 50 Z" fill="#FDE047" />
            <path d="M65 35 C80 20 85 40 70 45 Z" fill="#F472B6" stroke="#BE185D" strokeWidth="2" />
            <circle cx="52" cy="32" r="4" fill="#1E295B" />
            <circle cx="54" cy="30" r="1.5" fill="white" />
            <path d="M48 22 Q42 12 40 20" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
            <path d="M58 20 Q56 10 52 18" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
            <path d="M30 65 Q15 75 20 85" stroke="#6D28D9" strokeWidth="5" strokeLinecap="round" />
            <polygon points="20,85 15,92 25,90" fill="#F472B6" />
          </svg>
        </div>

        {/* Shooting Star Top Right inside Card */}
        <div className="absolute top-6 right-8 pointer-events-none opacity-80">
          <svg className="w-12 h-12 text-teal-400" viewBox="0 0 60 60" fill="none">
            <path d="M10 50 L40 20" stroke="#38BDF8" strokeWidth="3" strokeDasharray="4 4" />
            <polygon points="45,15 48,22 55,23 50,28 51,35 45,31 39,35 40,28 35,23 42,22" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Card Subheading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E295B] tracking-wide text-center mt-2 mb-8 uppercase">
          CREATE YOUR MAGICAL ADVENTURE!
        </h2>

        {/* 3 Input Select Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-8">
          
          {/* Section 1: Adventure Type (Purple) */}
          <div className="story-choice-card bg-[#A78BFA] hover:bg-[#9675F8] rounded-2xl p-4 text-white shadow-[0_6px_0_#7C3AED] border-2 border-purple-300 relative flex items-center gap-3 cursor-pointer group [--choice-shadow:#7C3AED]">
            <div className="w-12 h-12 bg-purple-200/40 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🐉</span>
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-sm uppercase font-extrabold tracking-wide text-purple-100 mb-1">
                1. Adventure Type:
              </label>
              <select
                value={adventureType}
                onChange={(e) => setAdventureType(e.target.value)}
                className="story-choice-select w-full bg-transparent text-[#1E295B] font-black text-base focus:outline-none cursor-pointer appearance-none"
              >
                <option value="Magic Forest" className="text-gray-900 font-bold">Magic Forest</option>
                <option value="Treasure Hunt" className="text-gray-900 font-bold">Treasure Hunt</option>
                <option value="Space Exploration" className="text-gray-900 font-bold">Space Exploration</option>
                <option value="Underwater Voyage" className="text-gray-900 font-bold">Underwater Voyage</option>
                <option value="Mystery Riddle" className="text-gray-900 font-bold">Mystery Riddle</option>
              </select>
            </div>
            {/* Chevron Icon */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Section 2: Character (Green) */}
          <div className="story-choice-card bg-[#4ADE80] hover:bg-[#38D472] rounded-2xl p-4 text-white shadow-[0_6px_0_#16A34A] border-2 border-green-300 relative flex items-center gap-3 cursor-pointer group [--choice-shadow:#16A34A]">
            <div className="w-12 h-12 bg-green-200/40 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🐻</span>
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-sm uppercase font-extrabold tracking-wide text-green-100 mb-1">
                2. Character:
              </label>
              <select
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
                className="story-choice-select w-full bg-transparent text-[#1E295B] font-black text-base focus:outline-none cursor-pointer appearance-none"
              >
                <option value="Leo the Brave Bear" className="text-gray-900 font-bold">Leo the Brave Bear</option>
                <option value="Barnaby the Bunny" className="text-gray-900 font-bold">Barnaby the Bunny</option>
                <option value="Oliver the Wise Owl" className="text-gray-900 font-bold">Oliver the Wise Owl</option>
                <option value="Penny the Penguin" className="text-gray-900 font-bold">Penny the Penguin</option>
                <option value="Maya the Dragon" className="text-gray-900 font-bold">Maya the Dragon</option>
              </select>
            </div>
            {/* Chevron Icon */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Section 3: Location (Orange) */}
          <div className="story-choice-card bg-[#FBBF24] hover:bg-[#F59E0B] rounded-2xl p-4 text-white shadow-[0_6px_0_#D97706] border-2 border-amber-200 relative flex items-center gap-3 cursor-pointer group [--choice-shadow:#D97706]">
            <div className="w-12 h-12 bg-amber-200/40 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🏰</span>
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-sm uppercase font-extrabold tracking-wide text-amber-100 mb-1">
                3. Location:
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="story-choice-select w-full bg-transparent text-[#1E295B] font-black text-base focus:outline-none cursor-pointer appearance-none"
              >
                <option value="The Enchanted Castle" className="text-gray-900 font-bold">The Enchanted Castle</option>
                <option value="Whispering Woods" className="text-gray-900 font-bold">Whispering Woods</option>
                <option value="Starlight Galaxy" className="text-gray-900 font-bold">Starlight Galaxy</option>
                <option value="Coral Kingdom" className="text-gray-900 font-bold">Coral Kingdom</option>
                <option value="Cloud Island" className="text-gray-900 font-bold">Cloud Island</option>
              </select>
            </div>
            {/* Chevron Icon */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative Inner Bottom Left (& Bottom Right) */}
        <div className="absolute bottom-6 left-10 hidden sm:block pointer-events-none opacity-80">
          <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
            <path d="M5 40 Q25 25 35 15" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="35,15 38,20 44,20 40,24 41,30 36,27 31,30 32,24 28,20 34,20" fill="#FBBF24" />
          </svg>
        </div>

        <div className="absolute bottom-6 right-10 hidden sm:block pointer-events-none opacity-90">
          <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
            <path d="M10 40 L35 15" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
            <circle cx="12" cy="38" r="3" fill="#F472B6" />
            <polygon points="35,15 37,10 42,10 38,7 39,2 35,5 31,2 32,7 28,10 33,10" fill="#FBBF24" />
          </svg>
        </div>

        {/* Massive Glowing Gradient Button – pulsating border */}
        <div className="mt-2 mb-4 relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
          <button
            onClick={handleGenerateStory}
            className="relative px-10 md:px-14 py-4 md:py-5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white font-extrabold text-2xl md:text-3xl tracking-wide rounded-full shadow-[0_8px_0_#C2410C] border-4 border-amber-200 transform transition-all active:translate-y-1 active:shadow-none hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-3 select-none hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.6)]">
            <span className="text-yellow-200 text-2xl">✨</span>
            <span>GENERATE STORY</span>
            <span className="text-yellow-200 text-2xl">✨</span>
          </button>
        </div>

      </main>

      {/* Outer Scene Decorations (Bottom Left & Right) */}
      <div className="w-full max-w-6xl flex justify-between items-end pointer-events-none relative z-0 -mt-12 px-4">
        
        {/* Left Side: Rainbow on clouds & Dragon */}
        <div className="flex flex-col items-start">
          <div className="relative">
            <svg className="w-32 h-20 md:w-44 md:h-28" viewBox="0 0 100 60" fill="none">
              <path d="M10 50 A 40 40 0 0 1 90 50" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
              <path d="M16 50 A 34 34 0 0 1 84 50" stroke="#F97316" strokeWidth="6" strokeLinecap="round" />
              <path d="M22 50 A 28 28 0 0 1 78 50" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" />
              <path d="M28 50 A 22 22 0 0 1 72 50" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" />
              <path d="M34 50 A 16 16 0 0 1 66 50" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <div className="absolute -bottom-2 left-6 w-14 h-14 md:w-16 md:h-16">
              <svg viewBox="0 0 100 100" fill="none">
                <path d="M40 70 C25 70 25 40 45 40 C40 30 55 15 75 25 C90 35 85 65 70 75 Z" fill="#4ADE80" stroke="#166534" strokeWidth="3" />
                <path d="M50 50 C45 60 55 75 65 70 Z" fill="#FEF08A" />
                <circle cx="58" cy="32" r="4" fill="#1E295B" />
                <circle cx="60" cy="30" r="1.5" fill="white" />
              </svg>
            </div>
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
