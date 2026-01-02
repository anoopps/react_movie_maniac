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

          const items = [3, 4, 7, 8, 9, 10];
          const type = ["toprated", "popular", "latest"];
          const randomItem = items[Math.floor(Math.random() * items.length)];

          const details = await detailRes.json();
          return {
            ...m,
            poster: details.poster || null,
            backdrop: details.backdrop || null,
            vote_average: randomItem,
            release_date: details.year || "N/A",
            type: type[Math.floor(Math.random() * type.length)],
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
