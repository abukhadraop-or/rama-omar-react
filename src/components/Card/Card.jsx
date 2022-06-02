import Moment from 'moment';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  PosterImg,
  CardDate,
  Circled,
  ColoredCircle,
  AboveCircle,
  ListButton,
  ListMenu,
  ListMenuOptions,
  BlurryImage,
  OverlayDiv,
  OverView,
} from './card.style';

/**
 * Renders each movie card with its' content.
 *
 * @param {object} props
 * @param {Promise<Card>} props.oneMovie
 *
 * @return Card object
 */
export function Card({ oneMovie }) {
  const [listClick, setListClick] = useState(false);

  /**
   * Toggles the listClick state that blurs the card and displays a list.
   */
  const listOnClickHandler = () => {
    setListClick(!listClick);
  };

  /**
   * Sets the ListClick to false to un blur the cards and hide the list.
   */
  const overLayHandler = () => {
    setListClick(false);
  };

  return (
    <>
      <Container>
        <ListButton onClick={listOnClickHandler} listShow={listClick}>
          ...
        </ListButton>

        {listClick && (
          <>
            <ListMenu>
              <ListMenuOptions boldHeader="boldHeader">
                Want to rate or add this item to a list?
              </ListMenuOptions>
              <ListMenuOptions midBorder="menuBorder">Login</ListMenuOptions>
              <ListMenuOptions boldHeader="boldHeader">
                Not a member?
              </ListMenuOptions>
              <ListMenuOptions>Sign up and join the community</ListMenuOptions>
            </ListMenu>
            <BlurryImage />
          </>
        )}
        <PosterImg src={`https://image.tmdb.org/t/p/w500${oneMovie.poster}`} />

        <Circled>
          <ColoredCircle percentage={oneMovie.percent * 10}>
            <AboveCircle>
              <Title percentageColor="white">{oneMovie.percent * 10}%</Title>
            </AboveCircle>
          </ColoredCircle>
        </Circled>
        <Title> {oneMovie.title} </Title>
        <CardDate>
          {Moment(oneMovie.release_date).format('MMM DD, YYYY')}
        </CardDate>

        <OverView>{oneMovie.overview}</OverView>
      </Container>
      {listClick && <OverlayDiv onClick={overLayHandler} />}
    </>
  );
}

Card.propTypes = {
  oneMovie: PropTypes.objectOf(Card).isRequired,
};

export default Card;
