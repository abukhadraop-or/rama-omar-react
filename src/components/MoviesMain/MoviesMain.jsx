import { useEffect, useState } from "react";
import { CardList } from "../CardList/cardList";
import { NavBar } from "../NavBar/NavBar";
import { SortCards } from "../Sort/SortCards";
import {
  CardContainer,
  Divider,
  LeftMenu,
  LoadMoreButton,
  MenuInfo,
  MenuTitles,
} from "./movies-main.style";
import { NavFooter } from "../Footer/Footer";
import  GlobalStyles  from "../../styles/global.style";

export const MoviesMain=() => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [SortTypeMain, setSortTypeMain] = useState("popularity.desc");

  /*
  *Adds one on each button click to determine the number of the page to be displayed 
  */
  const LoadMoreClickHandler = () => {
    setPageNum(pageNum + 1);
  };

  /**
  *fetch the api link to set the mapped movie values to the movies state to be sent to the cardList  
  */
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d6566c2bb246801ddff14c1d50aa232e&language=en-US&sort_by=${SortTypeMain}&include_adult=false&include_video=false&page=${pageNum}`
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
  }, [pageNum, SortTypeMain]);

  return (
    <>
    < GlobalStyles />
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
