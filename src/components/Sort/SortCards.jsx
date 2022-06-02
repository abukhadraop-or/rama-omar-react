import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SortCard,
  SortText,
  SortContainer,
  ShowedDetails,
  ShowedText,
  DropMenu,
  DropOption,
  SortForm,
  SortBtn,
  PopularTitle,
} from 'components/Sort/sort-cards.style';

/**
 * Renders the SortCard
 *
 * @param {object} props
 * @param {function} props.setSortTypeMain
 *
 * @return SortCard
 */
export function SortCards({ setSortTypeMain }) {
  const [sortState, setSortState] = useState(true);
  const [sortType, setSortType] = useState('popularity.desc');
  const [btnDisabled, setBtnDisabled] = useState('disabled');

  /**
   *
   *Toggles the SortState to show or hide a menu to choose the sorting type
   */
  const sortClickHandler = () => {
    setSortState(!sortState);
  };

  /**
   * Sets the btnDisabled to false so the button can be clicked and sets the sort type to api link.
   * @param props that holds the sort type
   */
  const searchOnChangeHandler = (props) => {
    setBtnDisabled('false');
    setSortType(props);
  };

  /**
   * set the sort type that will be used to fetch the api link in MoviesMain
   * @param  e
   */
  const btnSearchHandler = (e) => {
    e.preventDefault();
    setSortTypeMain(sortType);
  };

  return (
    <SortContainer>
      <PopularTitle>Popular Movies</PopularTitle>
      <SortForm>
        <SortCard onClick={sortClickHandler}>
          <SortText>Sort</SortText>
        </SortCard>
        <ShowedDetails displayDetails={sortState}>
          <ShowedText> Sort Results By</ShowedText>
          <DropMenu
            onChange={(val) => {
              searchOnChangeHandler(val.target.value);
            }}
          >
            <DropOption value="popularity.desc">
              Popularity Descending
            </DropOption>
            <DropOption value="popularity.asc">Popularity Ascending</DropOption>
            <DropOption value="vote_average.desc">Rating Descending</DropOption>
            <DropOption value="vote_average.asc">Rating Ascending</DropOption>
            <DropOption value="release_date.desc">
              Rating Date Descending
            </DropOption>
            <DropOption value="release_date.asc">
              Rating Date Ascending
            </DropOption>
            <DropOption value="original_title.asc"> Title (A-Z)</DropOption>
            <DropOption value="original_title.desc"> Title (Z-A)</DropOption>
          </DropMenu>
        </ShowedDetails>

        <SortCard>
          <SortText>Filters</SortText>
        </SortCard>

        <SortCard>
          <SortText>Where To Watch</SortText>
        </SortCard>

        <SortBtn disable={btnDisabled} onClick={btnSearchHandler}>
          Search
        </SortBtn>
      </SortForm>
    </SortContainer>
  );
}

SortCards.propTypes = {
  setSortTypeMain: PropTypes.func.isRequired,
};

export default SortCards;
