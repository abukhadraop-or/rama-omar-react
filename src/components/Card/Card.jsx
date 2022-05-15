import Moment from "moment";
import { useState } from "react";

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
} from "./card.style";

export const Card = ({ movieO }) => {
  const [ListClick, setListClick] = useState(false);

  /*
  *Toggels the listClick state that blurrs the card and displays a list
  */
  const ListOnClickHandler = () => {
    setListClick(!ListClick);
  };

  /*
  *Sets the ListClick to false to unBlurr the cards and hide the list
  */
  const overLayHandler = () => {
    setListClick(false);
  };

  return (
    <>
      <Container>
        <ListButton onClick={ListOnClickHandler} ListShow={ListClick}>
          ...
        </ListButton>

        {ListClick && (
          <>
            <ListMenu>
              <ListMenuOptions Opt={"hd"}>
                Want to rate or add this item to a list?
              </ListMenuOptions>
              <ListMenuOptions Bd={"brder"}>Login</ListMenuOptions>
              <ListMenuOptions Opt={"hd"}>Not a member?</ListMenuOptions>
              <ListMenuOptions>Sign up and join the community</ListMenuOptions>
            </ListMenu>
            <BlurryImage />
          </>
        )}
        <PosterImg src={`https://image.tmdb.org/t/p/w500${movieO.poster}`} />

        <Circled>
          <ColoredCircle per={movieO.percent * 10}>
            <AboveCircle>
              <Title percentage={"white"}>{movieO.percent * 10}%</Title>
            </AboveCircle>
          </ColoredCircle>
        </Circled>
        <Title> {movieO.title} </Title>
        <CardDate>
          {Moment(movieO.release_date).format("MMM DD, YYYY")}
        </CardDate>

        <OverView>{movieO.overview}</OverView>
      </Container>
      {ListClick && <OverlayDiv onClick={overLayHandler} />}
    </>
  );
};

export default Card;
