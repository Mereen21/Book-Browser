# book-browser

A responsive React web application for browsing, searching, and favoriting books powered by the Google Books API.

## Project Overview

A lightweight frontend application built to discover literature and manage personal reading lists. The application fetches recent fiction titles from the Google Books API, supports keyword-based title searching, includes paginated results, and persists a user's favorite books locally in the browser.

## Tech Stack

* **Frontend:** React (Vite), JavaScript (ES6+), CSS3

* **API:** Google Books REST API

* **Storage:** Browser LocalStorage API

## Core Features & Modules

### 1. Home / Discover Feed

The main catalog view for finding new titles.

* **Featured Showcase:** Automatically retrieves and displays a curated list of recent fiction releases on initial load.

* **Dynamic Search:** Real-time query submission allowing users to search books by title or keyword.

* **Pagination:** Fetches additional results using API index offsets so users can page through search results and catalogs seamlessly.

### 2. Favorites System

A client-side bookmarking module to save preferred books.

* **Persistent Favorites:** Uses `localStorage` to save and persist favorited books across browser reloads without requiring an account.

* **One-Click Toggling:** Allows users to add or remove books from their favorites directly on individual book cards.

* **Dedicated Favorites View:** A separate route/page that lists all saved titles for quick access.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)

* A [Google Cloud Console](https://console.cloud.google.com/) API key with the **Books API** enabled

### Installation & Setup

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/book-browser.git
   cd book-browser/frontend
   
   ```

2. **Install dependencies:**

   ```
   npm install
   
   ```

3. **Configure your API Key:**
   Add your Google Books API key inside your API configuration file (e.g., `src/services/api.js` or via a `.env` file):

   ```
   const API_KEY = "YOUR_GOOGLE_BOOKS_API_KEY";
   
   ```

4. **Start the development server:**

   ```
   npm run dev
   
   ```

   Open `http://localhost:5173` in your browser to view the application.

## Let's Connect

* **LinkedIn:** [Connect with me here](https://linkedin.com/in/rainier-merencillo)
* **Email:** [rainier.merencillo@gmail.com]
* **GitHub Profile:** [Mereen21](https://github.com/Mereen21)
