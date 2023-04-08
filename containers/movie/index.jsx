import FeaturedMovie from "@/components/feauterd-movie";
import React from "react";

function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export default MovieContainer;
