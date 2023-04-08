const API_URL = "https://api.themoviedb.org/3";

const fetchMoviesApi = async (pathname, query = "") => {
  try {
    const res =
      await fetch(`${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}
    `);

    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getMovie = async (movieId) => {
  return fetchMoviesApi(`/movie/${movieId}`);
};

const getSingleCategory = async (genreId) => {
  return fetchMoviesApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return fetchMoviesApi("/genre/movie/list", `&page=1`);
};
const getPopularMovies = async () => {
  return fetchMoviesApi("/movie/popular", `&page=1`);
};
const getTopRatedMovies = async () => {
  return fetchMoviesApi("/movie/top_rated", `&page=1`);
};

export {
  fetchMoviesApi,
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getMovie,
};
