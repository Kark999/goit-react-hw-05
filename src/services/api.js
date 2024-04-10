import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
(axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTAwZDBlODI3Y2M5NjdjYzA0NDdiOThmYjNiNzE4MyIsInN1YiI6IjY2MGYyMTQ4NTQ5ZGRhMDE4MjNkNTI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2g77Y8DbqhCVq7NqLuLPencYNiSCzdaxAmTX_Skwkqs",
}),
  (axios.defaults.params = { language: "en-US" });

export const getMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};

export const searchMovies = async (query = "") => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data.results;
};

export const requestMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};
