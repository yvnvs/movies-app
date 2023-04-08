import { notFound } from "next/navigation";
import MovieContainer from "@/containers/movie";
import { getMovie } from "@/services/movie";

const MoviePage = async ({ params, searchParams }) => {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  if (!searchParams.error === "true") {
    throw new Error("Error happend");
  }
  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
