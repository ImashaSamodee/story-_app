-- ================================================================
-- Story Magic - Supabase Database Schema
-- Instructions:
-- 1. Go to your Supabase Dashboard (https://supabase.com/dashboard)
-- 2. Select your project -> SQL Editor -> New Query
-- 3. Paste this entire file and click "Run"
-- ================================================================

-- 1. Create stories table
create table if not exists stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  story text not null,
  adventure_type text default 'Magic Forest',
  character text default 'Leo the Brave Bear',
  location text default 'The Enchanted Castle',
  image_category text default 'bear',
  is_favorite boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table stories enable row level security;

-- 3. Create policies for public access (Anon key access)
create policy "Allow public read access to stories"
  on stories for select
  using (true);

create policy "Allow public insert to stories"
  on stories for insert
  with check (true);

create policy "Allow public update to stories"
  on stories for update
  using (true);

create policy "Allow public delete to stories"
  on stories for delete
  using (true);

-- 4. Insert initial seed stories for the Library
insert into stories (title, story, adventure_type, character, location, image_category, is_favorite)
values
  (
    'The Dragon''s Picnic',
    'Deep inside the Whispering Woods, Maya the Dragon decided to host a picnic for all her woodland friends. She baked delicious marshmallow cupcakes that glowed in the dark! Leo the Bear brought sweet honeyberries, while Oliver the Wise Owl told funny riddles that made everyone laugh. As the sun set, Maya blew a tiny flame that lit up magical lanterns, making it the most magical picnic ever.',
    'Magic Forest',
    'Maya the Dragon',
    'Whispering Woods',
    'dragon',
    false
  ),
  (
    'Luna''s Night Flight',
    'Oliver the Wise Owl perched atop the Starry Tower, peering through his golden telescope at the dancing constellations. Suddenly, a little comet streaked across the sky, dropping a trail of sparkling stardust onto the velvet grass. Oliver unfurled his soft silver wings and soared into the moonlit sky, guiding lost little stars back to their cosmic nests before sunrise.',
    'Space Exploration',
    'Oliver the Owl',
    'Starry Tower',
    'owl',
    true
  ),
  (
    'Barnaby''s Secret Burrow',
    'Barnaby the Bunny discovered a hidden tunnel beneath an ancient, moss-covered oak tree in Sunny Meadow. Inside, crystal stones of every rainbow hue illuminated a secret workshop filled with ticking wooden clocks and tiny acorn tea sets. He invited Leo the Bear and Pip the Penguin to join him for the coziest tea party the meadow had ever seen.',
    'Hidden Treasure Hunt',
    'Barnaby the Bunny',
    'Sunny Meadow',
    'bunny',
    false
  ),
  (
    'Pip''s Frozen Voyage',
    'Pip the Penguin waddled across the sparkling glaciers of the Whispering Bay with a colorful explorer flag in his flipper. Sliding belly-first down a giant frosted snow-slide, he splashed into a warm enchanted hot spring where kind seal pups sang playful songs. Pip painted a giant glowing snowflake on the ice wall to mark the greatest icy adventure of his life.',
    'Underwater Kingdom',
    'Pip the Penguin',
    'Whispering Bay',
    'penguin',
    true
  );
