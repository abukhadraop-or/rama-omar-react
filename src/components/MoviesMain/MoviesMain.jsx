import { useEffect, useState } from "react";
import { CardList } from "../Card/cardList";
import { NavBar } from "../NavBar/navBar";
import { SortCards } from "../Sort/sortCards";
import {
  CardContainer,
  Divider,
  LeftMenu,
  LoadMoreButton,
  LoadMoreTxt,
  MenuInfo,
  MenuTitles,
} from "./MoviesMain.style";
import { NavFooter } from "../footer/footer";

//problem in footer
export function MoviesMain() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [displayMenu, setDisplayMenu] = useState(false);

  const LoadMoreClickHandler = () => {
    setPageNum(pageNum + 1);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d6566c2bb246801ddff14c1d50aa232e&page=${pageNum}`
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
  }, [pageNum]);

  //console.log(movies);

  return (
    <>
      <NavBar setDisplayMenu={setDisplayMenu} />
      <LeftMenu apper={displayMenu}>
        <MenuTitles>Movies</MenuTitles>
        <MenuTitles>TV Shows</MenuTitles>
        <MenuTitles>People</MenuTitles>
        <MenuInfo>Contrbution Bible</MenuInfo>
        <MenuInfo>Apps</MenuInfo>
        <MenuInfo>Discussions</MenuInfo>
        <MenuInfo>LeaderBoard</MenuInfo>
        <MenuInfo>Contribute</MenuInfo>
        <MenuInfo>API</MenuInfo>
        <MenuInfo>Support</MenuInfo>
        <MenuInfo>About</MenuInfo>
        <MenuInfo>Login</MenuInfo>
      </LeftMenu>
      <Divider>
        <SortCards setMovies={setMovies} />
        <CardContainer>
          <CardList movies={movies} />
          <LoadMoreButton onClick={LoadMoreClickHandler}>Load More</LoadMoreButton>
        </CardContainer>
      </Divider>
      <NavFooter />
    </>
  );
}

export default MoviesMain;
