import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Library() {
  const navigate = useNavigate();

  const savedStories = [
    {
      id: 1,
      title: "The Dragon's Picnic",
      type: "Magic Forest",
      character: "Maya the Dragon",
      imageCategory: "dragon",
      location: "Whispering Woods",
      accentColor: "border-purple-400",
      bgHeader: "bg-[#A78BFA]",
      buttonBg: "bg-emerald-400 hover:bg-emerald-500 shadow-[0_4px_0_#15803D]",
      storyText:
        "Deep inside the Whispering Woods, Maya the Dragon decided to host a picnic for all her woodland friends. She baked delicious marshmallow cupcakes that glowed in the dark! Leo the Bear brought sweet honeyberries, while Oliver the Wise Owl told funny riddles that made everyone laugh. As the sun set, Maya blew a tiny flame that lit up magical lanterns, making it the most magical picnic ever.",
      icon: (
        <svg className="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          {/* Dragon illustration */}
          <path d="M35 65 C20 65 20 35 40 35 C35 25 50 10 70 20 C85 30 80 60 65 70 C55 75 45 75 35 65 Z" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="3" />
          <path d="M45 45 C40 55 50 70 60 65 C65 55 55 45 45 45 Z" fill="#FDE047" />
          <path d="M65 30 C80 15 85 35 70 40 Z" fill="#F472B6" stroke="#BE185D" strokeWidth="2" />
          <circle cx="52" cy="27" r="4" fill="#1E295B" />
          <circle cx="54" cy="25" r="1.5" fill="white" />
          <path d="M48 17 Q42 7 40 15" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M58 15 Q56 5 52 13" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="20,80 15,87 25,85" fill="#F472B6" />
          <circle cx="20" cy="20" r="2" fill="#FEF08A" />
          <circle cx="85" cy="25" r="2.5" fill="#FEF08A" />
          <circle cx="78" cy="55" r="2" fill="#FEF08A" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Luna's Night Flight",
      type: "Space Exploration",
      character: "Oliver the Wise Owl",
      imageCategory: "owl",
      location: "Starlight Galaxy",
      accentColor: "border-emerald-400",
      bgHeader: "bg-[#4ADE80]",
      buttonBg: "bg-amber-400 hover:bg-amber-500 shadow-[0_4px_0_#C2410C]",
      storyText:
        "When the moon shone bright, Luna the Wise Owl flapped her silvery wings and soared into the Starlight Galaxy. Guided by twinkling stars, she discovered a constellation shaped like a giant treasure chest. Inside was a golden star map that revealed the secrets of the night sky!",
      icon: (
        <svg className="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          {/* Owl on branch illustration */}
          <rect x="15" y="70" width="70" height="7" rx="3.5" fill="#78350F" />
          <path d="M25 70 Q35 65 45 70" stroke="#15803D" strokeWidth="3" />
          <ellipse cx="50" cy="48" rx="22" ry="24" fill="#D97706" stroke="#78350F" strokeWidth="2.5" />
          <ellipse cx="50" cy="52" rx="15" ry="17" fill="#FEF3C7" />
          <circle cx="41" cy="36" r="9" fill="white" stroke="#78350F" strokeWidth="2" />
          <circle cx="59" cy="36" r="9" fill="white" stroke="#78350F" strokeWidth="2" />
          <circle cx="41" cy="36" r="4.5" fill="#1E295B" />
          <circle cx="59" cy="36" r="4.5" fill="#1E295B" />
          <circle cx="43" cy="34" r="1.5" fill="white" />
          <circle cx="61" cy="34" r="1.5" fill="white" />
          <polygon points="50,40 45,47 55,47" fill="#F59E0B" />
          <circle cx="20" cy="25" r="2.5" fill="#FEF08A" />
          <circle cx="80" cy="20" r="2" fill="#FEF08A" />
          <circle cx="75" cy="40" r="2" fill="#FEF08A" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "The Lost Crown",
      type: "Mystery Riddle",
      character: "Leo the Brave Bear",
      imageCategory: "bear",
      location: "The Enchanted Castle",
      accentColor: "border-amber-400",
      bgHeader: "bg-[#FBBF24]",
      buttonBg: "bg-purple-500 hover:bg-purple-600 shadow-[0_4px_0_#6D28D9]",
      storyText:
        "In the heart of the Enchanted Castle, the golden royal crown vanished mysteriously! Leo the Brave Bear followed a trail of sparkling footprints across the marble hall. With clever thinking, Leo solved three ancient riddles left by a friendly playful sprite, unlocking the secret chest and saving the day!",
      icon: (
        <svg className="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          {/* Castle illustration */}
          <rect x="25" y="45" width="50" height="35" fill="#C084FC" stroke="#6B21A8" strokeWidth="2" />
          <rect x="20" y="30" width="16" height="30" fill="#A855F7" stroke="#6B21A8" strokeWidth="2" />
          <rect x="64" y="30" width="16" height="30" fill="#A855F7" stroke="#6B21A8" strokeWidth="2" />
          <polygon points="28,10 16,30 40,30" fill="#EC4899" stroke="#9D174D" strokeWidth="2" />
          <polygon points="72,10 60,30 84,30" fill="#EC4899" stroke="#9D174D" strokeWidth="2" />
          <polygon points="50,15 36,35 64,35" fill="#F472B6" stroke="#9D174D" strokeWidth="2" />
          <path d="M42 80 C42 68 58 68 58 80 Z" fill="#78350F" />
          <circle cx="28" cy="10" r="3" fill="#FBBF24" />
          <circle cx="72" cy="10" r="3" fill="#FBBF24" />
          <circle cx="50" cy="15" r="3.5" fill="#FBBF24" />
          <circle cx="15" cy="20" r="2" fill="#FEF08A" />
          <circle cx="85" cy="25" r="2.5" fill="#FEF08A" />
        </svg>
      ),
    },
  ];

  const handleReadStory = (storyItem) => {
    navigate('/story', {
      state: {
        story: {
          title: storyItem.title,
          story: storyItem.storyText,
          imageCategory: storyItem.imageCategory,
          character: storyItem.character,
          location: storyItem.location,
        },
      },
    });
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

        <h1 className="text-5xl md:text-7xl font-black tracking-wider flex items-center gap-2 select-none font-sans">
          <span className="text-[#38BDF8] drop-shadow-[0_4px_0_#1E295B] text-stroke-white">STORY</span>
          <span className="bg-gradient-to-b from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_4px_0_#1E295B] text-stroke-white">MAGIC</span>
        </h1>
      </header>

      {/* Main Centered White Rounded Container */}
      <main className="relative z-10 w-full max-w-5xl bg-white rounded-[40px] shadow-[0_16px_50px_rgba(0,0,0,0.12)] border-4 border-white p-6 md:p-10 my-auto flex flex-col items-center">
        
        {/* Title: My Magical Library */}
        <div className="relative mb-8 text-center flex items-center justify-center gap-3">
          <div className="hidden sm:block text-amber-400 text-2xl -rotate-45">🌠</div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-wide flex items-center gap-2 select-none">
            <span className="text-purple-500 drop-shadow-sm">My</span>
            <span className="text-emerald-500 drop-shadow-sm">Magical</span>
            <span className="text-orange-500 drop-shadow-sm">Library</span>
          </h2>

          <div className="hidden sm:block text-amber-400 text-2xl rotate-45">🌠</div>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {savedStories.map((story) => (
            <div
              key={story.id}
              className={`bg-white rounded-3xl border-4 ${story.accentColor} shadow-lg overflow-hidden flex flex-col items-center transition-all hover:scale-105 duration-300`}
            >
              {/* Header Icon Banner Area */}
              <div className={`w-full ${story.bgHeader} h-44 flex items-center justify-center p-4 relative`}>
                {story.icon}
              </div>

              {/* Card Footer Body */}
              <div className="p-6 flex flex-col items-center justify-between flex-1 w-full text-center bg-white">
                <h3 className="text-xl font-black text-[#1E295B] mb-4 leading-snug">
                  {story.title}
                </h3>

                <button
                  onClick={() => handleReadStory(story)}
                  className={`${story.buttonBg} text-white font-extrabold text-lg px-8 py-2 rounded-full cursor-pointer transition-all active:translate-y-1 active:shadow-none select-none`}
                >
                  Read
                </button>
              </div>
            </div>
          ))}
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
