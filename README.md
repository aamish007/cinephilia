# 🎬 Cinephilia — Movie & TV Show App

Cinephilia is a responsive web app that lets users explore trending movies and TV shows using the TMDB API. It includes user authentication via Google and allows users to manage a personalized watchlist.

## 🚀 Live Demo

[🔗 Visit Cinephilia App](https://your-firebase-deployed-url.web.app)

## 🛠 Tech Stack

- **Frontend:** React, Chakra UI, React Router
- **Backend:** Firebase (Auth + Firestore)
- **APIs:** TMDB API

## 🔑 Features

- 🔍 Search Movies & TV Shows
- 🌙 Dark Mode toggle
- 🔐 Google Sign-In (Firebase Auth)
- ❤️ Watchlist (stored per user in Firestore)
- 📱 Responsive Design
- 📄 Movie/Show Detail Pages
- 🎭 Real-time UI updates

## 📁 Folder Structure (Important)
src/
├── components/
├── pages/
├── context/
├── fire.js // Firebase config
└── main.jsx // Entry point

## 🧪 How to Run Locally

1. **Clone the repository**

git clone https://github.com/aamish007/cinephilia.git
cd cinephilia
2. npm install

3. Create a .env file in the root with:
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_TMDB_API_KEY=your_tmdb_key

4. Start development server
npm run dev

Deployed using Firebase Hosting:
npm run build
firebase deploy

Made with ❤️ by Aamish Husain
