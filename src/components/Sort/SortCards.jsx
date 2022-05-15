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
} from "./sort-cards.style";

import { useState } from "react";

export const SortCards = ({ setSortTypeMain }) => {
  const [SortState, setSortState] = useState(true);
  const [SortType, setSortType] = useState("popularity.desc");
  const [BtnDisabled, setBtnDisabled] = useState("disabled");

  /**
  * 
  *Toggles the SortState to show or hide a menu to choose the sorting type
  */
  const SortClickHandler = () => {
    setSortState(!SortState)
  };

  /**
   *Sets the btnDisabled to false so it can be clicked and set the sort type to tje value that is sent by the props to be used in the api link 
   * @param props that holds the sort type
   */
  const searchOnChangeHandler = (props) => {
    setBtnDisabled("false");
    setSortType(props);
  };

  /**
  * set the sort type that will be used to fetch the api link in MoviesMain 
  * @param  e 
  */
   const btnSearchHandler = (e) => {
      e.preventDefault();
      setSortTypeMain(SortType);
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
