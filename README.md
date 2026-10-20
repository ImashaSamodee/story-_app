# ✨ Story Magic — AI Bedtime Story Generator

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-Express_5-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Express" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Google_Gemini-2.5_Flash-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <strong>Story Magic</strong> is a full-stack, AI-powered interactive children's bedtime story platform. It combines generative AI with dynamic character illustrations, soothing text-to-speech audio narration, and real-time cloud database synchronization.
</p>

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Project Structure](#-project-structure)
- [Database Schema (Supabase)](#-database-schema-supabase)
- [API Documentation](#-api-documentation)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Database Configuration (Supabase)](#2-database-configuration-supabase)
  - [3. Backend Configuration](#3-backend-configuration)
  - [4. Frontend Configuration](#4-frontend-configuration)
- [Environment Variables](#-environment-variables)
- [Resilience & Fallback Strategy](#-resilience--fallback-strategy)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🌟 Key Features

| Feature | Description |
| :--- | :--- |
| 🤖 **AI-Powered Storytelling** | Generates tailored, wholesome 3–5 sentence bedtime stories using **Google Gemini 2.5 Flash** or **OpenAI** based on selected character, location, and adventure theme. |
| 🎙️ **Read Aloud (TTS)** | Built-in browser speech synthesis that narrates stories with adjustable pitch and soothing bedtime pacing. |
| ☁️ **Cloud Database (Supabase)** | Stories are instantly persisted in PostgreSQL with **Row-Level Security (RLS)** policies enabled. |
| 🎨 **Dynamic Character Art** | Intelligently maps story characters (Dragons, Owls, Bears, Bunnies, Penguins) to colorful illustration art. |
| 📚 **Community Library** | Browse pre-seeded stories as well as AI-generated creations from other storytellers. |
| 💖 **Favorites Sync** | Bookmark favorite adventures with cross-syncing between Supabase database and local storage backup. |
| 🌓 **Day & Night Themes** | Child-friendly interface with an instant toggle between radiant day and dreamy starlit night mode. |

---

## 🏗️ Architecture & Tech Stack

```
 ┌──────────────────────┐         HTTP / JSON REST          ┌───────────────────────┐
 │   React 19 Frontend  │  ◄─────────────────────────────►  │   Express 5 Backend   │
 │   (Vite + Tailwind)  │                                   │       (Node.js)       │
 └──────────────────────┘                                   └───────────┬───────────┘
            │                                                           │
            ▼                                               ┌───────────┴───────────┐
   Browser Web Speech API                                   ▼                       ▼
   (Text-to-Speech Engine)                         ┌─────────────────┐     ┌─────────────────┐
                                                   │  Google Gemini  │     │ Supabase Cloud  │
                                                   │  or OpenAI API  │     │  (PostgreSQL)   │
                                                   └─────────────────┘     └─────────────────┘
```

- **Frontend:** React 19, Vite 8, React Router v7, TailwindCSS v4.
- **Backend:** Node.js, Express.js 5, CORS, Dotenv.
- **AI Integrations:** Google Gen AI SDK (`@google/genai`), OpenAI SDK (`openai`).
- **Database:** Supabase (PostgreSQL with Row Level Security).
- **Speech Engine:** Web Speech Synthesis API.

---

## 📂 Project Structure

```
story-_app/
├── backend/
│   ├── .env.example          # Backend environment variables template
│   ├── .gitignore            # Git ignore rules for backend
│   ├── aiStoryService.js     # AI generation module (Gemini, OpenAI, Fallback)
│   ├── index.js              # Express API server & routes
│   ├── package.json          # Backend dependencies & scripts
│   └── supabaseClient.js     # Supabase initialization client
│
├── frontend/
│   ├── .env.example          # Frontend environment variables template
│   ├── .gitignore            # Git ignore rules for frontend
│   ├── index.html            # Main HTML document with custom font imports
│   ├── package.json          # Frontend dependencies & scripts
│   ├── tailwind.config.js    # TailwindCSS styling configuration
│   ├── vite.config.js        # Vite build tool configuration
│   └── src/
│       ├── App.jsx           # Main App layout & route setup
│       ├── supabaseClient.js # Frontend Supabase client helper
│       └── pages/
│           ├── Home.jsx        # Story builder configuration screen
│           ├── Loading.jsx     # Playful animated loading screen
│           ├── StoryResult.jsx # Open storybook, TTS & favorite actions
│           ├── Library.jsx     # Cloud story library grid
│           ├── Favorites.jsx   # Saved favorites management
│           ├── About.jsx       # Application background & mission
│           └── Contact.jsx     # Feedback & contact form
│
├── supabase_schema.sql       # Database table creation, RLS & seed data
└── README.md                 # Project documentation
```

---

## 🗄️ Database Schema (Supabase)

The application utilizes a single unified PostgreSQL table: `stories`.

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
The database has Row Level Security enabled with open read/write/update/delete policies for public and anonymous users (configured via [supabase_schema.sql](./supabase_schema.sql)).

---

## 📡 API Documentation

Base URL: `http://localhost:5000`

### 1. Generate Story
- **Endpoint:** `POST /api/generate-story`
- **Description:** Generates an AI story using Gemini/OpenAI and automatically saves it to Supabase.
- **Request Body:**
  ```json
  {
    "character": "Leo the Brave Bear",
    "location": "The Enchanted Castle",
    "adventureType": "Magic Forest"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "id": "62884caa-1e9a-4ade-9125-08205178298e",
    "title": "Leo's Enchanted Castle Discovery",
    "story": "Once upon a time, Leo the Brave Bear stepped into The Enchanted Castle...",
    "imageCategory": "bear",
    "adventureType": "Magic Forest",
    "character": "Leo the Brave Bear",
    "location": "The Enchanted Castle",
    "savedToDb": true,
    "generatedBy": "gemini",
    "createdAt": "2026-10-20T10:02:07.491Z"
  }
  ```

### 2. Fetch Stories (Library)
- **Endpoint:** `GET /api/stories`
- **Response:** Array of stories ordered by creation date (newest first).

### 3. Fetch Favorites
- **Endpoint:** `GET /api/favorites`
- **Response:** Stories where `is_favorite = true`.

### 4. Toggle Favorite
- **Endpoint:** `PATCH /api/stories/:id/favorite`
- **Request Body:**
  ```json
  { "isFavorite": true }
  ```

### 5. Server Health Check
- **Endpoint:** `GET /`
- **Response:**
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

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)
- A free [Supabase](https://supabase.com/) Account
- *(Optional)* A free [Google AI Studio Gemini API Key](https://aistudio.google.com/app/apikey)

---

### 1. Clone Repository

```bash
git clone https://github.com/ImashaSamodee/story-_app.git
cd story-_app
```

---

### 2. Database Configuration (Supabase)

1. Navigate to your [Supabase Dashboard](https://supabase.com/dashboard) and create a new project.
2. Open the **SQL Editor** from the left-hand navigation.
3. Paste the contents of [`supabase_schema.sql`](./supabase_schema.sql) and click **Run**.
4. Go to **Project Settings** → **API** to copy:
   - **Project URL**
   - **Project API Key** (`anon` / `public`)

---

### 3. Backend Configuration

```bash
cd backend
npm install
```

Create `.env` file inside `backend/` (or copy from `.env.example`):
```env
PORT=5000
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key

# AI Configuration (Free Gemini Key from https://aistudio.google.com/app/apikey)
GEMINI_API_KEY=your-gemini-api-key
# OPENAI_API_KEY=your-openai-api-key
```

Start the backend:
```bash
npm run dev
# Server will start on http://localhost:5000
```

---

### 4. Frontend Configuration

In a new terminal window:
```bash
cd frontend
npm install
```

*(Optional)* Create `.env` inside `frontend/`:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Start the frontend development server:
```bash
npm run dev
# Vite will launch at http://localhost:5173
```

---

## 🛡️ Resilience & Fallback Strategy

Story Magic is engineered to be rock-solid and child-friendly even in offline or unconfigured environments:
- **No AI Key?** The system seamlessly switches to a built-in algorithmic storytelling generator without throwing errors.
- **No Supabase connection?** Stories still generate in-memory and favorites persist locally in browser `localStorage`.
- **Offline speech?** If speech synthesis is unsupported on older browsers, the read button fails silently without breaking the reading interface.

---

## 🗺️ Roadmap

- [x] Multi-character bedtime story generator
- [x] Web Speech narration engine (Text-to-Speech)
- [x] Supabase Cloud database persistence
- [x] Google Gemini AI integration
- [ ] Multi-language bedtime stories (Sinhala, Spanish, French, etc.)
- [ ] AI-generated illustration matching via Imagen or DALL-E
- [ ] User profile authentication for personalized family storybooks
- [ ] Downloadable PDF bedtime storybook export

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<p align="center">Made with ✨ for children, parents, and story lovers everywhere.</p>
