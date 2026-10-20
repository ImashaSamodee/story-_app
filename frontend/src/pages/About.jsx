import React from 'react';

export default function About() {
  return (
    <div className="story-page relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-10 font-['Fredoka',sans-serif]">
      <div className="absolute left-[5%] top-20 h-20 w-20 rounded-full bg-white/45 blur-sm" />
      <div className="absolute bottom-16 right-[7%] h-28 w-28 rounded-full bg-yellow-200/45 blur-sm" />
      <section className="relative w-full max-w-5xl rounded-[36px] border-4 border-white bg-white p-6 shadow-[0_14px_40px_rgba(30,41,91,0.16)] md:p-10">
        <div className="grid items-center gap-8 border-b-2 border-sky-100 pb-9 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div className="text-center md:text-left">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-pink-500">A place for big imaginations</p>
            <h1 className="mb-4 text-4xl font-black leading-tight text-[#1E295B] md:text-6xl">About Story Magic</h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-[#475569] md:text-xl">
              Story Magic turns favorite characters and places into bright, one-of-a-kind adventures made for curious imaginations.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[30px] border-4 border-amber-200 bg-amber-50 shadow-[0_8px_0_#FBBF24]">
            <img src="/story_dragon_adventure.jpg" alt="A colorful dragon ready for a magical adventure" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>

        <div className="mt-9 grid gap-6 text-left md:grid-cols-2">
          <section className="rounded-3xl border-2 border-sky-200 bg-sky-50 p-6">
            <div className="mb-4 flex items-center gap-4">
              <img src="/story_owl_adventure.jpg" alt="A friendly owl from a story adventure" className="h-16 w-16 rounded-2xl object-cover" />
              <h2 className="text-2xl font-black text-[#1E295B]">Our Mission</h2>
            </div>
            <p className="text-base font-medium leading-relaxed text-[#475569]">
              We want every child to discover the joy of making stories. Story Magic encourages creativity, builds confidence, and gives young imaginations a place to explore endless possibilities.
            </p>
          </section>

          <section className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-6">
            <h2 className="mb-5 text-2xl font-black text-[#1E295B]">How It Works</h2>
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              {[
                ['1', 'Choose your adventure & character', '/story_bear_adventure.jpg'],
                ['2', 'Generate a story with AI', '/story_dragon_adventure.jpg'],
                ['3', 'Read and enjoy your adventure', '/story_mystery_riddle.jpg'],
              ].map(([number, step, image]) => (
                <div key={number} className="flex items-center gap-3 rounded-2xl bg-white/70 p-2">
                  <img src={image} alt="" className="h-12 w-12 rounded-xl object-cover" />
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-white">{number}</span>
                  <span className="text-sm font-bold text-[#475569]">{step}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 flex flex-col items-center gap-5 rounded-3xl border-2 border-purple-200 bg-purple-50 p-6 text-center sm:flex-row sm:text-left">
          <img src="/story_bunny_adventure.jpg" alt="A cheerful bunny in a magical story" className="h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-sm" />
          <div>
            <h2 className="mb-2 text-2xl font-black text-[#1E295B]">Created By</h2>
            <p className="max-w-3xl text-base font-medium leading-relaxed text-[#475569] md:text-lg">
              Built with passion by an IT Undergraduate / Full-Stack Developer to blend creativity with modern tech.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
