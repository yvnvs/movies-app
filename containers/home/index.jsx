import React from "react";
import FeaturedMovie from "@/components/feauterd-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories.slice(1, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection
        title="Popular Films"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorities"
        movies={popularMovies.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
