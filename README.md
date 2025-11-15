# StreamFlix: Next.js Streaming Dashboard

A simplified streaming service dashboard clone built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. This project fetches real-time movie data from **The Movie Database (TMDB) API** and was completed as part of a technical assessment.

## 🚀 Live Demo

[Link to your Vercel Deployment Here]

---

## 📋 Features

* **Server-Side Rendering (SSR):** Homepage is server-rendered for fast initial loads using Server Components.
* **Dynamic Routing:** Individual movie detail pages are dynamically generated (e.g., `/movie/[id]`).
* **External API Integration:** Securely fetches data from the TMDB API on the server.
* **Optimized Images:** Uses the Next.js `<Image />` component for optimized, responsive images.
* **Responsive Design:** Fully responsive layout for all components, built with Tailwind CSS.
* **Modern Tooling:** Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **API:** [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api)
* **Linting/Formatting:** ESLint & Prettier
* **Deployment:** [Vercel](https://vercel.com/)

---

## Local Development

To get a local copy up and running, follow these simple steps.

### 1. Prerequisites

* [Node.js](https://nodejs.org/) (v18 or later)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* **TMDB API Key:** You must have a free API Read Access Token (v3 auth) from [themoviedb.org](https://www.themoviedb.org/).

### 2. Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/streaming-dashboard.git](https://github.com/your-username/streaming-dashboard.git)
    cd streaming-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add your TMDB API key.

    ```.env.local
    # This key MUST be server-side only
    TMDB_API_KEY="YOUR_V3_API_READ_ACCESS_TOKEN_HERE"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🔐 Environment Variables

This project uses a single, critical environment variable:

* `TMDB_API_KEY`: **(Required)** Your v3 API Read Access Token from TMDB. This key is used on the server side to fetch movie data. It must **not** be prefixed with `NEXT_PUBLIC_`.

When deploying to Vercel, this variable must be added to the project's Environment Variables settings to ensure the production build works correctly.
