# ✨ Story Magic (with Supabase Integration)

Story Magic is a children's bedtime story generator application with dynamic illustrations, text-to-speech audio narration, and cloud database storage powered by **Supabase**.

---

## 🚀 Supabase Setup Guide

### 1. Create a Supabase Project
1. Go to [Supabase Dashboard](https://supabase.com/dashboard) and sign in.
2. Click **"New project"**, choose a name (e.g. `story-app`) and set a secure database password.
3. Wait about 1-2 minutes for your project to deploy.

### 2. Create the Database Table
1. In your Supabase project dashboard, open the **SQL Editor** from the left sidebar.
2. Click **"New query"**.
3. Open and copy the entire contents of [`supabase_schema.sql`](./supabase_schema.sql).
4. Paste it into the SQL editor and click **Run**.
   - This creates the `stories` table with Row-Level Security (RLS) policies.
   - It also pre-populates initial sample stories into your library!

### 3. Add Environment Variables
From your Supabase project dashboard, go to **Project Settings** -> **API**:
- Copy **Project URL**
- Copy **Project API Key** (`anon` / `public`)

#### Backend Configuration:
Open [`backend/.env`](./backend/.env) and paste your credentials:
```env
PORT=5000
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key-here

# AI Model Configuration (Choose Google Gemini or OpenAI)
# 1. Google Gemini (Recommended & Free): Get key at https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your-gemini-api-key-here

# 2. OpenAI (Optional): Get key at https://platform.openai.com/api-keys
# OPENAI_API_KEY=your-openai-api-key-here
```

#### Frontend Configuration (Optional):
Open [`frontend/.env`](./frontend/.env) and paste the same Supabase values:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

---

## 🏃 Running the Application

### 1. Start the Backend Server:
```bash
cd backend
npm run dev
# Server will run at http://localhost:5000
```

### 2. Start the Frontend App:
```bash
cd frontend
npm run dev
# Frontend will run at http://localhost:5173
```

---

## 📦 Features Added
- **Cloud Persistence**: Generated stories are automatically saved in Supabase.
- **Library Sync**: Saved stories in Supabase automatically appear in the Library.
- **Favorites Sync**: Favoriting stories updates the `is_favorite` flag in Supabase with localStorage backup.
- **Graceful Offline Mode**: If Supabase credentials are not yet entered, the app gracefully runs in local mode without crashing.
