import React from 'react';

export default function Loading() {
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
      <div className="absolute top-72 right-12 text-white/60 pointer-events-none">
        <svg className="w-24 h-16" viewBox="0 0 100 60" fill="currentColor">
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

      {/* Main Card Container */}
      <main className="relative z-10 w-full max-w-3xl bg-white rounded-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.1)] border-4 border-white p-8 md:p-12 my-auto flex flex-col items-center justify-center">
        
        {/* Magic Hat Container with Bouncing Animation */}
        <div className="relative mb-6 flex flex-col items-center">
          {/* Bouncing Hat Graphic */}
          <div className="animate-bounce duration-1000">
            <svg className="w-48 h-48 md:w-56 md:h-56 drop-shadow-lg" viewBox="0 0 200 200" fill="none">
              {/* Colorful Magic Streamers Bursting Out */}
              <path d="M90 85 C80 60 70 50 65 35" stroke="#4ADE80" strokeWidth="5" strokeLinecap="round" />
              <path d="M100 80 C95 50 110 35 125 25" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
              <path d="M105 85 C120 65 140 55 150 45" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round" />
              <path d="M95 82 C105 55 90 40 100 20" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />

              {/* Little Stars and Dots above ribbons */}
              <polygon points="125,20 127,24 132,24 128,27 129,32 125,29 121,32 122,27 118,24 123,24" fill="#FBBF24" />
              <polygon points="65,30 66,33 70,33 67,35 68,39 65,37 62,39 63,35 60,33 64,33" fill="#F472B6" />
              <polygon points="152,40 153,42 156,42 154,44 155,47 152,45 149,47 150,44 148,42 151,42" fill="#38BDF8" />
              <circle cx="102" cy="15" r="3" fill="#FBBF24" />
              <circle cx="140" cy="30" r="2.5" fill="#EF4444" />
              <circle cx="75" cy="45" r="2.5" fill="#A78BFA" />

              {/* Wizard Hat opening / inner rim */}
              <ellipse cx="100" cy="90" rx="42" ry="16" fill="#1E1B4B" />
              <ellipse cx="100" cy="90" rx="38" ry="13" fill="#312E81" />

              {/* Hat Main Body */}
              <path d="M60 90 L75 145 C80 155 120 155 125 145 L140 90 C125 102 75 102 60 90 Z" fill="#3730A3" stroke="#1E1B4B" strokeWidth="3" />
              
              {/* Hat Base Brim */}
              <path d="M45 140 C45 140 30 150 55 158 C80 166 120 166 145 158 C170 150 155 140 155 140 C140 148 120 152 100 152 C80 152 60 148 45 140 Z" fill="#4338CA" stroke="#1E1B4B" strokeWidth="3" />
              
              {/* Hat Gold Ribbon Base */}
              <path d="M72 135 C85 142 115 142 128 135 L126 144 C115 150 85 150 74 144 Z" fill="#F59E0B" />
              <rect x="94" y="136" width="12" height="10" rx="2" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />

              {/* Star Pattern on Hat */}
              <polygon points="85,108 87,112 92,112 88,115 89,120 85,117 81,120 82,115 78,112 83,112" fill="#FDE047" />
              <polygon points="112,110 114,113 118,113 115,116 116,120 112,118 108,120 109,116 106,113 110,113" fill="#FDE047" />
              <polygon points="100,122 101,125 105,125 102,127 103,131 100,129 97,131 98,127 95,125 99,125" fill="#FDE047" />
              <polygon points="70,120 71,123 74,123 72,125 73,128 70,126 67,128 68,125 66,123 69,123" fill="#FDE047" />
            </svg>
          </div>

          {/* Soft Shadow under Hat */}
          <div className="w-36 h-4 bg-indigo-100/80 rounded-[100%] blur-[2px] mt-1"></div>
        </div>

        {/* Progress Bar Container with Glowing Effect */}
        <div className="w-full max-w-md bg-amber-100/90 rounded-full p-2 border-4 border-white shadow-[0_0_20px_rgba(251,191,36,0.4)] mb-6 relative overflow-hidden">
          {/* Animated Progress Fill Bar */}
          <div className="h-9 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 rounded-full shadow-inner flex items-center justify-between px-4 transition-all duration-500 animate-pulse w-[75%]">
            <span className="text-white text-xs select-none">✦</span>
            <span className="text-white text-xs select-none">✦</span>
          </div>
        </div>

        {/* Pulsing Text below Progress Bar */}
        <div className="flex items-center gap-2 relative">
          <span className="text-teal-400 text-xl animate-spin">✦</span>
          <h2 className="text-2xl md:text-3xl font-black text-amber-900 tracking-wide text-center uppercase animate-pulse select-none drop-shadow-sm">
            Brewing Your Magical Story...
          </h2>
          <span className="text-purple-400 text-xl animate-spin">✦</span>
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
