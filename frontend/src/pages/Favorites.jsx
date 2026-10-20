import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FAVORITES_STORAGE_KEY = 'storyMagicFavorites';

const getImageForStory = (story) => {
  const category = (story.imageCategory || '').toLowerCase();
  const character = (story.character || '').toLowerCase();

  if (category.includes('dragon') || character.includes('dragon')) return '/story_dragon_adventure.jpg';
  if (category.includes('owl') || character.includes('owl')) return '/story_owl_adventure.jpg';
  if (category.includes('bunny') || character.includes('bunny') || character.includes('rabbit')) return '/story_bunny_adventure.jpg';
  if (category.includes('penguin') || character.includes('penguin')) return '/story_penguin_adventure.jpg';
  return '/story_bear_adventure.jpg';
};

export default function Favorites() {
  const navigate = useNavigate();
  const [favoriteStories, setFavoriteStories] = useState([]);

  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]');
    setFavoriteStories(savedStories);
  }, []);

  const removeFavorite = (storyToRemove) => {
    const updatedStories = favoriteStories.filter(
      (story) => !(story.title === storyToRemove.title && story.story === storyToRemove.story),
    );
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedStories));
    setFavoriteStories(updatedStories);
  };

  const openStory = (story) => {
    navigate('/story', { state: { story } });
  };

  return (
    <div className="story-page relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-10 font-['Fredoka',sans-serif]">
      <div className="absolute left-[12%] top-20 text-3xl text-pink-300 animate-pulse">♥</div>
      <div className="absolute right-[15%] bottom-24 text-4xl text-yellow-300 animate-bounce">★</div>
      <section className="relative w-full max-w-5xl rounded-[36px] border-4 border-white bg-white p-8 text-center shadow-[0_14px_40px_rgba(30,41,91,0.16)] md:p-12">
        <div className="mb-5 text-6xl">💖</div>
        <h1 className="mb-4 text-4xl font-black text-[#1E295B] md:text-5xl">Your Favorite Stories</h1>
        {favoriteStories.length === 0 ? (
          <div className="mx-auto max-w-lg">
            <p className="text-lg font-medium leading-relaxed text-[#475569] md:text-xl">
              Your favorite adventures will appear here. Tap the heart on a story to keep it close!
            </p>
            <Link to="/" className="mt-8 inline-flex rounded-full bg-orange-400 px-7 py-3 text-lg font-extrabold text-white shadow-[0_5px_0_#C2410C] transition-transform hover:-translate-y-1">
              Create a Magical Story 🪄
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {favoriteStories.map((story, index) => (
              <article key={`${story.title}-${index}`} className="flex flex-col overflow-hidden rounded-3xl border-4 border-pink-200 bg-pink-50 shadow-md transition-transform hover:-translate-y-1">
                <img src={getImageForStory(story)} alt={story.character || 'Favorite story'} className="h-40 w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-xl font-black text-[#1E295B]">{story.title}</h2>
                  <p className="mb-5 line-clamp-4 flex-1 text-sm font-medium leading-relaxed text-[#475569]">{story.story}</p>
                  <div className="flex gap-2">
                    <button onClick={() => openStory(story)} className="flex-1 rounded-full bg-emerald-400 px-3 py-2 font-extrabold text-white shadow-[0_4px_0_#15803D] hover:bg-emerald-500">Read</button>
                    <button onClick={() => removeFavorite(story)} aria-label={`Remove ${story.title} from favorites`} className="rounded-full bg-pink-400 px-4 py-2 text-2xl font-black leading-none text-white shadow-[0_4px_0_#BE185D] hover:bg-pink-500">♥</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
