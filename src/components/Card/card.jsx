//import { render } from "@testing-library/react";
import {
  Container,
  Title,
  PosterImg,
  CardDate,
  Conts,
  Circled,
  ColoredCircle,
  AboveCircle,
  ListButton,
  ListMenu,
  ListMenuOptions,
  BlurryImage,
  OverlayDiv,
  OverView,
  //TitleHovered,
} from "../Card/card.style";
import Moment from "moment";
import { useState } from "react";

export const Card = ({ movies }) => {
  //   const [MouseOver, setMouseOver] = useState(false);
  //   onMouseOver={setMouseOver(true)}
  //   onMouseLeave={setMouseOver(false)}
  const [ListClick, setListClick] = useState(false);

  const ListOnClickHandler = () => {
    setListClick(!ListClick);
  };

  const overLayHandler = () => {
    setListClick(false);
  };

  return (
    <Conts>
      {movies.map((movie) => {
        return (
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
                  <ListMenuOptions>
                    Sign up and join the community
                  </ListMenuOptions>
                </ListMenu>
                <BlurryImage />
              </>
            )}
            <PosterImg src={`https://image.tmdb.org/t/p/w500${movie.poster}`} />

            <Circled>
              <ColoredCircle per={movie.percent * 10}>
                <AboveCircle>
                  <Title percentage={"white"}>{movie.percent * 10}%</Title>
                </AboveCircle>
              </ColoredCircle>
            </Circled>
            <Title> {movie.title} </Title>
            <CardDate>
              {Moment(movie.release_date).format("MMM DD, YYYY")}
            </CardDate>

            <OverView>{movie.overview}</OverView>
          </Container>
        );
      })}
      {ListClick && <OverlayDiv onClick={overLayHandler} />}
    </Conts>
  );
};

export default Card;
