export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg";
export const TM_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};
export const MOVIE_CLIP_URL = "https://api.themoviedb.org/3/movie/";
export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500";

export const supportedLang = [
  { id: "en", name: "English" },
  { id: "hindi", name: "Hindi" },
  { id: "mal", name: "Malayalam" },
];
