import React, { useEffect, useState } from "react";
import { CardList } from "components/CardList/CardList";
import { NavBar } from "components/NavBar/NavBar";
import { SortCards } from "components/Sort/SortCards";
import { fetchMovies } from "Services/movies";
import { NavFooter } from "components/Footer/Footer";
import {
  CardContainer,
  Divider,
  LeftMenu,
  LoadMoreButton,
  MenuInfo,
  MenuTitles,
} from "components/MoviesMain/movies-main.style";
import GlobalStyles from "Styles/global.style";

/**
 * Renders the MoviesMain which renders all the movie cards and the SortCard.
 * @returns MoviesMain and SortCard.
 */
export function MoviesMain() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [sortTypeMain, setSortTypeMain] = useState("popularity.desc");

  /*
   *Adds one on each button click to determine the number of the page to be displayed
   */
  const LoadMoreClickHandler = () => {
    setPageNum(pageNum + 1);
  };

  /**
   **fetch the api link to set the mapped movie values to the movies state to be sent to the cardList.
   */

  useEffect(() => {
    const getData = async () => {
      const { results } = await fetchMovies(sortTypeMain, pageNum);
      setMovies( 
        results.map((movieData) => ({
          id: movieData.id,
          poster: movieData.poster_path,
          release_date: movieData.release_date,
          title: movieData.title,
          percent: movieData.vote_average,
          overview: movieData.overview,
        }))
        );
    };
    getData()
  }, [pageNum, sortTypeMain]);

  return (
    <>
      <GlobalStyles />
      <NavBar setDisplayMenu={setDisplayMenu} />
      <LeftMenu appearMenu={displayMenu}>
        <MenuTitles>Movies</MenuTitles>
        <MenuTitles>TV Shows</MenuTitles>
        <MenuTitles>People</MenuTitles>
        <MenuInfo>Contribution Bible</MenuInfo>
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
        <SortCards setSortTypeMain={setSortTypeMain} />
        <CardContainer>
          <CardList movies={movies} />
          <LoadMoreButton onClick={LoadMoreClickHandler}>
            Load More
          </LoadMoreButton>
        </CardContainer>
      </Divider>
      <NavFooter />
    </>
  );
}

export default MoviesMain;
