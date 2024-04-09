import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTAwZDBlODI3Y2M5NjdjYzA0NDdiOThmYjNiNzE4MyIsInN1YiI6IjY2MGYyMTQ4NTQ5ZGRhMDE4MjNkNTI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2g77Y8DbqhCVq7NqLuLPencYNiSCzdaxAmTX_Skwkqs",
  },
};

const url = "https://api.themoviedb.org";
const trending = "/3/trending/movie/day?language=en-US";
const search = "/3/search/movie?include_adult=false&language=en-US&page=1";

export const getMovies = async () => {
  const { data } = await axios.get(url + trending, options);
  return data;
};

export const searchMovies = async () => {
  const { data } = await axios.get(url + search, options);
  return data;
};
