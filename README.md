# ✨ Story Magic — AI Bedtime Story Generator & Audio Storybook

<p align="center">
  <img src="frontend/src/assets/hero.png" alt="Story Magic Hero Banner" width="220" style="border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);" />
</p>

<h3 align="center">Enchanting Bedtime Stories Crafted by Artificial Intelligence</h3>

<p align="center">
  A full-stack interactive web application that weaves imaginative children's bedtime adventures using <strong>Google Gemini 2.5 Flash</strong>, features soothing <strong>Text-to-Speech (TTS)</strong> audio narration, dynamic character illustrations, and real-time cloud persistence with <strong>Supabase PostgreSQL</strong>.
</p>

<p align="center">
  <a href="https://github.com/ImashaSamodee/story-_app/stargazers"><img src="https://img.shields.io/github/stars/ImashaSamodee/story-_app?style=for-the-badge&color=F59E0B&logo=github" alt="GitHub Stars" /></a>
  <a href="https://github.com/ImashaSamodee/story-_app/network/members"><img src="https://img.shields.io/github/forks/ImashaSamodee/story-_app?style=for-the-badge&color=38BDF8&logo=github" alt="GitHub Forks" /></a>
  <a href="https://github.com/ImashaSamodee/story-_app/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Node.js-Express_5-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Express 5" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase PostgreSQL" />
  <img src="https://img.shields.io/badge/Google_Gemini-2.5_Flash-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-explore-adventures--characters">Characters & Realms</a> •
  <a href="#-architecture--tech-stack">Architecture</a> •
  <a href="#-database-schema-supabase">Database Schema</a> •
  <a href="#-api-documentation">API Docs</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-resilience--fallback-strategy">Fallbacks</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

---

## 📖 Overview

Bedtime stories spark creativity, nurture empathy, and strengthen parent-child bonds. However, coming up with fresh, wholesome, and engaging stories every night can be challenging.

**Story Magic** solves this by turning story building into a delightful, interactive ritual. Children pick their favorite hero (from Leo the Bear to Maya the Dragon), an exciting adventure theme, and an enchanted realm. Powered by **Google Gemini 2.5 Flash**, the system generates tailored, gentle 3–5 sentence bedtime stories in seconds, complete with rich artwork, cloud library saving, and relaxing voice narration.

---

## 🌟 Key Features

| Feature | Description |
| :--- | :--- |
| 🤖 **AI-Powered Storytelling** | Generates gentle, age-appropriate children's bedtime tales using **Google Gemini 2.5 Flash** or **OpenAI**, with automatic fallback algorithms. |
| 🎙️ **Read Aloud Audio Narration** | Native browser **Web Speech Synthesis API** with soothing bedtime pacing, pitch tuning, and instant play/pause control. |
| ☁️ **Supabase Cloud Sync** | Seamless real-time PostgreSQL database storage with **Row-Level Security (RLS)** policies enabled. |
| 🎨 **Dynamic Character Art** | Intelligently maps story characters (Dragons, Owls, Bears, Bunnies, Penguins) to vibrant hand-crafted illustrations. |
| 📚 **Community Story Library** | Explore saved tales, pre-seeded storybook classics, and creations from other young storytellers. |
| 💖 **Favorites Sync** | Bookmark cherished bedtime tales with bidirectional sync between Supabase Cloud and browser `localStorage`. |
| 🌓 **Day & Starlight Night Modes** | Child-friendly interface with an instant toggle between warm daytime sky blue and starry night indigo mode. |
| 📱 **Responsive & Accessible** | Fluid design optimized for tablets, phones, and bedside reading with WCAG-conscious contrast and typography. |
| 🛡️ **Zero-Crash Resilience** | Operates smoothly even without an AI API key, without a cloud database, or in offline browser scenarios. |

---

## 🎨 Explore Adventures & Characters

### 🐾 The Character Cast

| Character | Emblem | Personality & Specialty | Matching Artwork |
| :--- | :---: | :--- | :--- |
| **Leo the Brave Bear** | 🐻 | Courageous, kind-hearted forest explorer who loves sharing treats | [`story_bear_adventure.jpg`](frontend/public/story_bear_adventure.jpg) |
| **Maya the Dragon** | 🐉 | Gentle, starry-winged dragon who lights up the night with warm flames | [`story_dragon_adventure.jpg`](frontend/public/story_dragon_adventure.jpg) |
| **Oliver the Wise Owl** | 🦉 | Star-gazing scholar who solves bedtime riddles under starlit canopies | [`story_owl_adventure.jpg`](frontend/public/story_owl_adventure.jpg) |
| **Barnaby the Bunny** | 🐰 | Quick-footed dreamer who hops across flower meadows and hidden paths | [`story_bunny_adventure.jpg`](frontend/public/story_bunny_adventure.jpg) |
| **Penny the Penguin** | 🐧 | Curious ice-surfer who loves glowing coral kingdoms and sea voyages | [`story_penguin_adventure.jpg`](frontend/public/story_penguin_adventure.jpg) |

### 🗺️ Adventure Realms & Themes

| Adventure Theme | Iconic Location | Theme Artwork |
| :--- | :--- | :--- |
| **Magic Forest** | *Whispering Woods* | [`story_dragon_adventure.jpg`](frontend/public/story_dragon_adventure.jpg) |
| **Treasure Hunt** | *The Enchanted Castle* | [`story_treasure_hunt.jpg`](frontend/public/story_treasure_hunt.jpg) |
| **Space Exploration** | *Starlight Galaxy* | [`story_space_exploration.jpg`](frontend/public/story_space_exploration.jpg) |
| **Underwater Voyage** | *Coral Kingdom* | [`story_underwater_voyage.jpg`](frontend/public/story_underwater_voyage.jpg) |
| **Mystery Riddle** | *Cloud Island* | [`story_mystery_riddle.jpg`](frontend/public/story_mystery_riddle.jpg) |

---

## 🏗️ Architecture & Tech Stack

```
 ┌────────────────────────────────────────────────────────┐
 │                   Story Magic Frontend                 │
 │       React 19  •  Vite 8  •  Tailwind CSS v4          │
 │              React Router v7  •  Web Speech            │
 └───────────────────────────┬────────────────────────────┘
                             │
                  REST API (JSON over HTTP)
                             │
                             ▼
 ┌────────────────────────────────────────────────────────┐
 │                   Express 5 Backend                    │
 │               Node.js  •  CORS  •  Dotenv              │
 └─────────────┬────────────────────────────┬─────────────┘
               │                            │
               ▼                            ▼
 ┌───────────────────────────┐ ┌──────────────────────────┐
 │     AI Generation Layer   │ │   Supabase Cloud DB      │
 │  • Google Gemini 2.5 Flash│ │  • PostgreSQL Database   │
 │  • OpenAI Fallback        │ │  • Row Level Security    │
 │  • Built-in Algorithmic   │ │  • Stories & Favorites   │
 └───────────────────────────┘ └──────────────────────────┘
```

### Technology Breakdown

- **Frontend Core:** [React 19](https://react.dev/), [Vite 8](https://vitejs.dev/), [React Router v7](https://reactrouter.com/)
- **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com/) with custom animations, glassmorphism filters, and Google Web Fonts (`Fredoka`, `Outfit`)
- **Backend Runtime:** [Node.js](https://nodejs.org/) with [Express.js 5](https://expressjs.com/)
- **AI Engine:** Google Gen AI SDK ([`@google/genai`](https://www.npmjs.com/package/@google/genai)) with Gemini 2.5 Flash, plus optional [OpenAI SDK](https://www.npmjs.com/package/openai)
- **Cloud Database:** [Supabase](https://supabase.com/) managed PostgreSQL with Row Level Security (RLS)
- **Audio & Speech:** HTML5 Web Speech Synthesis API
- **Code Linter:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

---

## 📂 Project Structure

```
story-_app/
├── backend/
│   ├── .env                      # Local environment secrets (ignored by git)
│   ├── .env.example              # Template for backend environment variables
│   ├── .gitignore                # Git ignore configuration for backend
│   ├── aiStoryService.js         # AI story generator (Gemini, OpenAI, Fallback)
│   ├── index.js                  # Express 5 server, REST endpoints & health check
│   ├── package.json              # Backend dependencies & dev scripts
│   └── supabaseClient.js         # Supabase client singleton initialization
│
├── frontend/
│   ├── .env.example              # Template for frontend environment variables
│   ├── .gitignore                # Git ignore configuration for frontend
│   ├── .oxlintrc.json            # Fast Rust-based linter configuration
│   ├── index.html                # App entry HTML with Fredoka & Outfit fonts
│   ├── package.json              # Frontend dependencies & Vite scripts
│   ├── tailwind.config.js        # Tailwind styling & theme extensions
│   ├── vite.config.js            # Vite build tool and plugin configuration
│   ├── public/                   # Static illustration art assets
│   │   ├── favicon.svg           # Story Magic logo favicon
│   │   ├── icons.svg             # Application SVG icons
│   │   ├── story_bear_adventure.jpg
│   │   ├── story_dragon_adventure.jpg
│   │   ├── story_owl_adventure.jpg
│   │   ├── story_bunny_adventure.jpg
│   │   ├── story_penguin_adventure.jpg
│   │   ├── story_space_exploration.jpg
│   │   ├── story_treasure_hunt.jpg
│   │   ├── story_underwater_voyage.jpg
│   │   └── story_mystery_riddle.jpg
│   └── src/
│       ├── App.css               # Story Magic custom animations & scrollbars
│       ├── App.jsx               # Layout shell, navbar, routes & night mode state
│       ├── index.css             # Tailwind base layer & global utilities
│       ├── main.jsx              # React 19 root bootstrap
│       ├── supabaseClient.js     # Frontend Supabase SDK client helper
│       ├── assets/               # Branding assets & hero graphics
│       │   └── hero.png
│       └── pages/
│           ├── Home.jsx          # Interactive story builder studio
│           ├── Loading.jsx       # Animated magical loading screen with tips
│           ├── StoryResult.jsx   # Open storybook reader with TTS & favorites
│           ├── Library.jsx       # Cloud story gallery with search & filters
│           ├── Favorites.jsx     # Saved favorites collection manager
│           ├── About.jsx         # Mission, features & team information
│           └── Contact.jsx       # Interactive feedback & contact form
│
├── supabase_schema.sql           # Database schema, RLS policies & initial seed data
├── LICENSE                       # MIT Open Source License
└── README.md                     # Comprehensive project documentation
```

---

## 🗄️ Database Schema (Supabase)

The application stores adventures in a PostgreSQL table named `stories`.

```sql
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
```

### Row Level Security (RLS)

The table includes Row Level Security policies configured to allow public read, insert, update, and delete operations:

```sql
alter table stories enable row level security;

create policy "Public stories are viewable by everyone" 
  on stories for select using (true);

create policy "Anyone can insert stories" 
  on stories for insert with check (true);

create policy "Anyone can update stories" 
  on stories for update using (true);

create policy "Anyone can delete stories" 
  on stories for delete using (true);
```

> **Full setup script available in [`supabase_schema.sql`](./supabase_schema.sql).**

---

## 📡 API Documentation

Base URL: `http://localhost:5000`

### 1. Server Health & AI Engine Check
- **Endpoint:** `GET /`
- **Description:** Returns server status, Supabase connection status, and active AI engine.
- **Response `(200 OK)`:**
  ```json
  {
    "message": "Story Magic API Server is active and running!",
    "supabaseConnected": true,
    "aiEngine": "Google Gemini",
    "geminiConfigured": true,
    "openaiConfigured": false
  }
  ```

---

### 2. Generate Story
- **Endpoint:** `POST /api/generate-story`
- **Description:** Synthesizes an AI bedtime story based on character, adventure type, and location, and persists it in Supabase.
- **Request Body:**
  ```json
  {
    "character": "Leo the Brave Bear",
    "location": "The Enchanted Castle",
    "adventureType": "Magic Forest"
  }
  ```
- **Response `(200 OK)`:**
  ```json
  {
    "success": true,
    "id": "62884caa-1e9a-4ade-9125-08205178298e",
    "title": "Leo's Enchanted Castle Discovery",
    "story": "Once upon a time, Leo the Brave Bear stepped into The Enchanted Castle. Guided by twinkling fairy dust, Leo discovered a secret door that led to a magical library of sparkling books. With a heart full of wonder, Leo smiled warmly and fell into the sweetest sleep under the starlit sky.",
    "imageCategory": "bear",
    "adventureType": "Magic Forest",
    "character": "Leo the Brave Bear",
    "location": "The Enchanted Castle",
    "savedToDb": true,
    "generatedBy": "gemini",
    "createdAt": "2026-10-21T10:02:07.491Z"
  }
  ```

---

### 3. Fetch Story Library
- **Endpoint:** `GET /api/stories`
- **Description:** Retrieves all generated and seeded stories sorted by `created_at` descending.
- **Response `(200 OK)`:**
  ```json
  {
    "success": true,
    "stories": [ ... ],
    "source": "supabase"
  }
  ```

---

### 4. Fetch Favorite Stories
- **Endpoint:** `GET /api/favorites`
- **Description:** Retrieves only stories marked as `is_favorite = true`.
- **Response `(200 OK)`:**
  ```json
  {
    "success": true,
    "favorites": [ ... ],
    "source": "supabase"
  }
  ```

---

### 5. Toggle Favorite Status
- **Endpoint:** `PATCH /api/stories/:id/favorite`
- **Request Body:**
  ```json
  {
    "isFavorite": true
  }
  ```
- **Response `(200 OK)`:**
  ```json
  {
    "success": true,
    "story": {
      "id": "62884caa-1e9a-4ade-9125-08205178298e",
      "is_favorite": true
    }
  }
  ```

---

### 6. Delete Story
- **Endpoint:** `DELETE /api/stories/:id`
- **Response `(200 OK)`:**
  ```json
  {
    "success": true,
    "message": "Story deleted successfully",
    "id": "62884caa-1e9a-4ade-9125-08205178298e"
  }
  ```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)
- A free [Supabase](https://supabase.com/) Account *(for cloud database persistence)*
- A free [Google AI Studio Gemini API Key](https://aistudio.google.com/app/apikey) *(recommended for generative AI)*

---

### 1. Clone the Repository

```bash
git clone https://github.com/ImashaSamodee/story-_app.git
cd story-_app
```

---

### 2. Set Up Supabase Database

1. Open your [Supabase Dashboard](https://supabase.com/dashboard) and create a new project.
2. Click on the **SQL Editor** tab in the sidebar.
3. Open [`supabase_schema.sql`](./supabase_schema.sql) from this repository, paste the entire contents into the SQL Editor, and click **Run**.
4. Navigate to **Project Settings** → **API** to copy:
   - **Project URL**
   - **Project API Key** (`anon` / `public`)

---

### 3. Configure & Run Backend Server

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory (you can copy `.env.example`):

```env
PORT=5000
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key

# AI Configuration (Free Gemini API Key from https://aistudio.google.com/app/apikey)
GEMINI_API_KEY=your-gemini-api-key

# Optional OpenAI fallback
# OPENAI_API_KEY=your-openai-api-key
```

Start the backend API server:

```bash
npm run dev
```

*The backend server will run on `http://localhost:5000`.*

---

### 4. Configure & Run Frontend Client

In a separate terminal window:

```bash
cd frontend
npm install
```

*(Optional)* Create a `.env` file in `frontend/` if direct client-side Supabase queries are desired:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Launch the Vite development server:

```bash
npm run dev
```

*Open your browser and navigate to `http://localhost:5173`.*

---

## ⚙️ Environment Variables Reference

### Backend (`backend/.env`)

| Variable | Description | Required | Default / Example |
| :--- | :--- | :---: | :--- |
| `PORT` | Port for Express server | No | `5000` |
| `SUPABASE_URL` | Supabase Project URL | Recommended | `https://xyzcompany.supabase.co` |
| `SUPABASE_ANON_KEY` | Supabase Anonymous Public API Key | Recommended | `eyJhbGci...` |
| `GEMINI_API_KEY` | Google Gemini AI Key ([AI Studio](https://aistudio.google.com/app/apikey)) | Recommended | `AIzaSy...` |
| `OPENAI_API_KEY` | OpenAI API Key *(used as secondary fallback)* | No | `sk-...` |

### Frontend (`frontend/.env`)

| Variable | Description | Required | Default / Example |
| :--- | :--- | :---: | :--- |
| `VITE_SUPABASE_URL` | Supabase Project URL for client queries | Optional | `https://xyzcompany.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Supabase Anonymous Public API Key | Optional | `eyJhbGci...` |

---

## 🛡️ Resilience & Fallback Strategy

Story Magic is designed with a **Zero-Failure Architecture** so that bedtime stories never fail to load:

```
                  ┌──────────────────────────────┐
                  │    Story Request Received    │
                  └──────────────┬───────────────┘
                                 │
                     Is GEMINI_API_KEY valid?
                                 │
                   ┌─────────────┴─────────────┐
                  YES                          NO
                   │                           │
                   ▼                           ▼
        Generate via Gemini          Is OPENAI_API_KEY valid?
                   │                           │
            Successful?            ┌───────────┴───────────┐
                   │              YES                      NO
             ┌─────┴─────┐         │                       │
            YES          NO        ▼                       ▼
             │           │  Generate via OpenAI   Algorithmic Template
             │           └─────────┬─────────┘    Generator (Offline)
             │                     │                       │
             ▼                     ▼                       ▼
      Story Complete        Story Complete          Story Complete
```

1. **No AI API Key?** If neither Gemini nor OpenAI keys are configured, or if API quotas are exceeded, the built-in algorithmic template engine seamlessly generates tailored stories without throwing error pages.
2. **Database Offline?** If Supabase is unreachable, stories are generated in-memory and favorites are persisted directly to the browser's `localStorage`.
3. **Speech Engine Graceful Degradation:** If the client browser lacks Speech Synthesis capabilities, the Read Aloud button fails silently without interrupting reading.

---

## 🗺️ Roadmap

- [x] Multi-character interactive bedtime story builder
- [x] Integration with Google Gemini 2.5 Flash generative AI
- [x] Web Speech Synthesis audio narration engine
- [x] Supabase PostgreSQL database integration with RLS
- [x] Dual light mode and starlight night theme toggle
- [x] Resilient algorithmic fallback generation engine
- [x] Responsive layout with mobile-first card interface
- [ ] Multi-language bedtime stories (Sinhala, Tamil, Spanish, French, German)
- [ ] AI-generated custom story illustration matching via Imagen 3 / DALL-E
- [ ] Downloadable and printable bedtime storybook PDF export
- [ ] Family user accounts & personalized bedtime profiles
- [ ] Background soothing lullaby audio player with sleep timer

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the Repository**
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/magical-new-character
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "feat: add friendly fairy character and forest meadow location"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/magical-new-character
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is open-source and distributed under the **[MIT License](LICENSE)**.

---

## 👩‍💻 Author & Acknowledgments

Created with ✨ and passion by **[Imasha Samodee](https://github.com/ImashaSamodee)**.

- **Institution:** Institute of Technology, University of Moratuwa (ITUM)
- **GitHub:** [@ImashaSamodee](https://github.com/ImashaSamodee)
- **Repository:** [https://github.com/ImashaSamodee/story-_app](https://github.com/ImashaSamodee/story-_app)

<p align="center">
  <sub>Made with 💖 for dreamers, children, and parents everywhere. Sweet dreams! 🌙</sub>
</p>
