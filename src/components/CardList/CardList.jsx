import React from 'react';
import PropTypes from 'prop-types';
import { MovieListContainer } from 'components/CardList/card-list.style';
import { Card } from 'components/Card/Card';

/**
 * Maps each movie in movies into a card.
 *
 * @param {object} props
 * @param {array<Card>} props.movies
 *
 * @return cardList
 */
export function CardList({ movies }) {
  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <React.Fragment key={movie.id}>
          <Card oneMovie={movie} />
        </React.Fragment>
      ))}
    </MovieListContainer>
  );
}

CardList.propTypes = {
  movies: PropTypes.arrayOf(Card).isRequired,
};

export default CardList;
