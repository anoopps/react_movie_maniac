// movieService.js
const API_KEY = "LYntnZ08jiPZLySVID3WWf0ucKn8VZoMmdDxgJ7I";
const BASE = "https://api.watchmode.com/v1";

export const getMoviesWithImages = async () => {
  try {
    // Limit to 20 movies to avoid rate limit
    const listRes = await fetch(
      `${BASE}/list-titles/?types=movie&limit=20&apiKey=${API_KEY}`
    );
    const data = await listRes.json();

    if (!data.titles) {
      console.error("Watchmode Error:", data);
      return []; // prevent crash
    }

    // Fetch details one by one safely
    const movies = await Promise.all(
      data.titles.map(async (m) => {
        try {
          const detailRes = await fetch(
            `${BASE}/title/${m.id}/details/?apiKey=${API_KEY}`
          );
          const details = await detailRes.json();
          return {
            ...m,
            poster: details.poster || null,
            backdrop: details.backdrop || null,
          };
        } catch (err) {
          console.error("Detail fetch error:", err);
          return m;
        }
      })
    );
    return movies;
  } catch (error) {
    console.error("Main API error:", error);
    return [];
  }
};
