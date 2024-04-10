import axios from "axios";

const options = {
  method: "GET",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTAwZDBlODI3Y2M5NjdjYzA0NDdiOThmYjNiNzE4MyIsInN1YiI6IjY2MGYyMTQ4NTQ5ZGRhMDE4MjNkNTI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2g77Y8DbqhCVq7NqLuLPencYNiSCzdaxAmTX_Skwkqs",
  },
};

const url = "https://api.themoviedb.org/3";
const trending = "/trending/movie/day";
const search = "/search/movie";
const movieID = "/movie/movie_id";

export const getMovies = async () => {
  const { data } = await axios.get(url + trending, options);
  return data.results;
};

export const searchMovies = async (query = "") => {
  const { data } = await axios.get(url + search + `?query=${query}`, options);
  return data.results;
};

export const searchMovieId = async () => {
  const { data } = await axios.get(url + movieID, options);
  return data.results;
};
