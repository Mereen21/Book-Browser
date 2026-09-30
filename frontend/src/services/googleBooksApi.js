const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

const BASE_URL="https://www.googleapis.com/books/v1/volumes";
const MAX_RESULTS = 40;

const fetchBooks = async (query, startIndex, maxResults, orderBy) => {
  if (!API_KEY) {
    throw new Error("Missing VITE_GOOGLE_BOOKS_API_KEY. Add it to frontend/.env.local.");
  }

  const params = new URLSearchParams({
    q: query,
    startIndex: String(Math.max(0, startIndex)),
    maxResults: String(Math.min(Math.max(1, maxResults), MAX_RESULTS)),
    key: API_KEY,
  });
  if (orderBy) params.set("orderBy", orderBy);

  const response = await fetch(`${BASE_URL}?${params}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to fetch books.");
  }

  return { items: data.items || [], totalItems: data.totalItems || 0 };
};

export const getPopularBooks = (startIndex = 0, maxResults = 20) =>
  fetchBooks("subject:fiction", startIndex, maxResults, "newest");

export const searchBooks = (query, startIndex = 0, maxResults = 20) =>
  fetchBooks(`intitle:${query}`, startIndex, maxResults);
