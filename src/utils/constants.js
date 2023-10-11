export const mainLogo =
  "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png";

export const defaultUserAvatar =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const getApiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODk4ZWY1MDU4NGQ5OWM4MjYxZDRlOTAwZjhlM2IxOSIsInN1YiI6IjY1MjU1NDExODNlZTY3MDEzYjdlMDAzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LSRyTVMmjZ6n3zBdE72KVTz5hHg11m1iT8B7q9svPuI",
  },
};

export const nowPlayingAPI =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const popularMoviesAPI =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const topRatedMoviesAPI =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const upcomingMoviesAPI =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original";

export const BG_IMG_URL =
  "http://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg";

export const Supported_languages = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "telugu",
    name: "Telugu",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];
