import { useEffect, useState } from "react";
import { Card } from "../Card/card";
import { NavBar } from "../NavBar/navBar";
import { SortCards } from "../Sort/sortCards";
import { CardContainer, Divider, LoadMoreButton } from "./MoviesMain.style";
import {NavFooter} from "../footer/footer";

//problem in footer
export function MoviesMain() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d6566c2bb246801ddff14c1d50aa232e"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const transformed = data.results.map((movieData) => {
          return {
            key: movieData.id,
            poster: movieData.poster_path,
            release_date: movieData.release_date,
            title: movieData.title,
            percent: movieData.vote_average,
            overview: movieData.overview,
          };
        });
        setMovies(transformed);
      });
  }, []);

  //console.log(movies);

  return (
    <>
      <NavBar />
      <Divider>
        <SortCards setMovies={setMovies}/>
        <CardContainer>
          <Card movies={movies}/>
          <LoadMoreButton>Load More</LoadMoreButton>
        </CardContainer>
      </Divider>
      <NavFooter />
    </>
  );
}

export default MoviesMain;
