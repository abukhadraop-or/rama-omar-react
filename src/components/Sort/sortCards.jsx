import {
  SortCard,
  SortText,
  Contn,
  ShowedDetails,
  ShowedText,
  DropMenu,
  DropOption,
  SortForm,
  SortBtn,
  Populr
} from "./sortCards.style";

import { useState } from "react";

export const SortCards = ({ setMovies }) => {
  const [SortState, setSortState] = useState(true);
  const [SortType, setSortType] = useState("popularity.desc");
  const [BtnDisabled, setBtnDisabled] = useState("disabled");

  const SortClickHandler = () => {
    if (SortState === true) {
      setSortState(false);
    } else {
      setSortState(true);
    }
  };

  const searchOnChangeHandler = (props) => {
    setBtnDisabled("false");
    setSortType(props);
  };

  const btnSearchHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d6566c2bb246801ddff14c1d50aa232e&language=en-US&sort_by=${SortType}&include_adult=false&include_video=false&page=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const Sorted = data.results.map((movieData) => {
          return {
            key: movieData.id,
            poster: movieData.backdrop_path,
            release_date: movieData.release_date,
            title: movieData.title,
            percent: movieData.vote_average,
          };
        });
        setMovies(Sorted);
        console.log(Sorted);
      });
  };

  return (
    <Contn>
      <Populr>Popular Movies</Populr>
      <SortForm>
          <SortCard onClick={SortClickHandler}>
            <SortText>Sort</SortText>
          </SortCard>
          <ShowedDetails disp={SortState}>
            <ShowedText> Sort Results By</ShowedText>
            <DropMenu
              onChange={(val) => {
                searchOnChangeHandler(val.target.value);
              }}
            >
              <DropOption value="popularity.desc">
                Popularity Descending
              </DropOption>
              <DropOption value="popularity.asc">
                Popularity Ascending
              </DropOption>
              <DropOption value="vote_average.desc">
                Rating Descending
              </DropOption>
              <DropOption value="vote_average.asc">Rating Ascending</DropOption>
              <DropOption value="release_date.desc">
                Rating Date Descending
              </DropOption>
              <DropOption value="release_date.asc">
                Rating Date Ascending
              </DropOption>
              <DropOption value="original_title.asc"> Title (A-Z)</DropOption>
              <DropOption value="original_tite.desc"> Title (Z-A)</DropOption>
            </DropMenu>
          </ShowedDetails>

        <SortCard>
          <SortText>Filters</SortText>
        </SortCard>

        <SortCard>
          <SortText>Where To Watch</SortText>
        </SortCard>

          <SortBtn disable={BtnDisabled} onClick={btnSearchHandler}>
            Search
          </SortBtn>
      </SortForm>
    </Contn>
  );
};

export default SortCards;
