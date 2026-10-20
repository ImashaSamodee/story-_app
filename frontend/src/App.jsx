import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Loading from './pages/Loading';
import StoryResult from './pages/StoryResult';
import Library from './pages/Library';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={`story-magic-shell min-h-screen transition-colors duration-700 ${isNightMode ? 'bg-[#b2ebf2] mode-light' : 'bg-indigo-950 mode-dark'}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-amber-300 bg-[#1E295B] px-4 py-3 text-white shadow-lg md:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <Link to="/" className="text-xl font-black tracking-wide text-amber-300 transition-transform hover:scale-105">
            ✨ Story Magic
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            {[
              ['Home', '/'],
              ['Library', '/library'],
              ['Favorites', '/favorites'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="rounded-full px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-amber-300 hover:text-[#1E295B] sm:px-4"
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setIsNightMode((currentMode) => !currentMode)}
              aria-pressed={isNightMode}
              aria-label={isNightMode ? 'Switch to daytime mode' : 'Switch to magical night mode'}
              className="ml-1 rounded-full border-2 border-amber-300 bg-indigo-900 px-3 py-2 text-sm font-black text-amber-200 transition-all hover:bg-amber-300 hover:text-[#1E295B] sm:ml-2 sm:px-4"
            >
              {isNightMode ? '☀ Day' : '☾ Night'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area (padding-top accounts for fixed navbar) */}
      <main className="pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/story" element={<StoryResult />} />
          <Route path="/library" element={<Library />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="story-footer relative overflow-hidden border-t border-amber-300/40 bg-[#122653] px-6 pb-4 pt-8 text-white md:px-10">
        <div className="story-footer-stars" aria-hidden="true">✦</div>
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.9fr_0.9fr_1.3fr] lg:gap-0">
            <div className="lg:pr-8">
              <Link to="/" className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-wide text-amber-300 transition-colors hover:text-yellow-200">
                <span aria-hidden="true">✨</span> Story Magic
              </Link>
              <p className="mt-2 max-w-[220px] text-sm font-medium leading-relaxed text-blue-100">
                Where imagination comes to life. Create, read, and cherish magical stories that inspire!
              </p>
              <div className="mt-3 flex gap-2" aria-label="Social links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-blue-50 transition-colors hover:bg-amber-300 hover:text-[#122653]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.78V3.94c-.31-.04-1.38-.14-2.63-.14-2.6 0-4.38 1.59-4.38 4.51V10H7v3h2.77v8h3.73Z" /></svg>
                </a>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-blue-50 transition-colors hover:bg-amber-300 hover:text-[#122653]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M12 2a9.9 9.9 0 0 0-8.57 14.85L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.83.84-3.07-.2-.32A8.2 8.2 0 1 1 12 20.2Zm4.5-6.15c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-1.45-.72-2.4-1.3-3.37-2.94-.25-.43.25-.4.72-1.32.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.32 3.81 1.61.69 2.24.75 3.04.63.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29Z" /></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-blue-50 transition-colors hover:bg-amber-300 hover:text-[#122653]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" className="fill-current stroke-none" /></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-blue-50 transition-colors hover:bg-amber-300 hover:text-[#122653]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M21.6 7.2a2.9 2.9 0 0 0-2.04-2.05C17.76 4.67 12 4.67 12 4.67s-5.76 0-7.56.48A2.9 2.9 0 0 0 2.4 7.2c-.48 1.8-.48 4.8-.48 4.8s0 3 .48 4.8a2.9 2.9 0 0 0 2.04 2.05c1.8.48 7.56.48 7.56.48s5.76 0 7.56-.48a2.9 2.9 0 0 0 2.04-2.05c.48-1.8.48-4.8.48-4.8s0-3-.48-4.8ZM10 15.33V8.67L15.33 12 10 15.33Z" /></svg>
                </a>
              </div>
            </div>

            <div className="border-white/10 lg:border-l lg:px-6">
              <h2 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-sky-300">🚀 Explore</h2>
              <div className="space-y-1.5 text-sm font-medium text-blue-100">
                <Link to="/" className="block transition-colors hover:text-amber-300">Home</Link>
                <Link to="/library" className="block transition-colors hover:text-amber-300">Library</Link>
                <Link to="/favorites" className="block transition-colors hover:text-amber-300">Favorites</Link>
                <Link to="/about" className="block transition-colors hover:text-amber-300">Popular Stories</Link>
              </div>
            </div>

            <div className="border-white/10 lg:border-l lg:px-6">
              <h2 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-pink-300">♥ Help &amp; Support</h2>
              <div className="space-y-1.5 text-sm font-medium text-blue-100">
                <Link to="/about" className="block transition-colors hover:text-amber-300">About Us</Link>
                <Link to="/about" className="block transition-colors hover:text-amber-300">How It Works</Link>
                <Link to="/contact" className="block transition-colors hover:text-amber-300">Contact Us</Link>
                <Link to="/contact" className="block transition-colors hover:text-amber-300">FAQs</Link>
              </div>
            </div>

            <div className="border-white/10 lg:border-l lg:px-6">
              <h2 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-emerald-300">🛡 Legal</h2>
              <div className="space-y-1.5 text-sm font-medium text-blue-100">
                <a href="#terms" className="block transition-colors hover:text-amber-300">Terms of Use</a>
                <a href="#privacy" className="block transition-colors hover:text-amber-300">Privacy Policy</a>
                <a href="#cookies" className="block transition-colors hover:text-amber-300">Cookie Policy</a>
              </div>
            </div>

            <div className="border-white/10 lg:border-l lg:pl-6">
              <h2 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-amber-300">✉ Newsletter</h2>
              <p className="mb-2 text-sm font-medium text-blue-100">Subscribe to get magical stories and updates in your inbox!</p>
              <form className="flex max-w-[190px] flex-col gap-2" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="footer-email" className="sr-only">Your email address</label>
                <input id="footer-email" type="email" placeholder="Your email address" required className="h-7 rounded-full border border-blue-200/60 bg-transparent px-3 text-sm text-white outline-none placeholder:text-blue-100/80 focus:border-amber-300" />
                <button type="submit" className="h-7 w-fit rounded-full bg-amber-300 px-5 text-sm font-extrabold text-[#122653] transition-colors hover:bg-yellow-200">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-3 text-sm font-medium text-blue-200 sm:flex-row">
            <span>© 2026 Story Magic. All rights reserved.</span>
            <span className="text-2xl leading-none text-amber-300" aria-hidden="true">📖</span>
            <span>Made with <span className="text-red-400">♥</span> for dreamers everywhere.</span>
          </div>
        </div>
      </footer>
      </div>
    </BrowserRouter>
  );
}
