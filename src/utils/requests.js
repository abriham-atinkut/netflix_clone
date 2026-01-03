const API_kEY = process.env.REACT_APP_API_KEY;

console.log(API_kEY);
const requests = {
  fetchTrending: `/treding/all/week?aip_key=${API_kEY}&languaage=en-US`,
  fetchNetflixOriginals: `/discover/tv/week?aip_key=${API_kEY}&with_networks=213`,
  fetchActionMovies: `/movie/top_rated?api_key=${API_kEY}&languaage=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_kEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_kEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_kEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_kEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_kEY}&with_genres=99`,
};

export default requests;
