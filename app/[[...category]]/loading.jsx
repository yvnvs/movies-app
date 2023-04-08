import React from "react";
import { CategoriesLoading } from "@/components/categories/loading";
import { FeatureMovieLoading } from "@/components/feauterd-movie/loading";
import { MoviesSectionLoading } from "@/components/movies-section/loading";

const Loading = () => {
  return (
    <div>
      <MoviesSectionLoading />
      <FeatureMovieLoading />
      <CategoriesLoading />
    </div>
  );
};

export default Loading;
