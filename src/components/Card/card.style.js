import styled from 'styled-components';
import { colors } from 'styles/colors';
import breakpoint from 'styles/breakpoints';

export const Container = styled.div`
  border-radius: 0.5rem;
  border: solid 0.1rem ${colors.lightGrey};
  box-shadow: 0.2rem 0.2rem 0.2rem ${colors.lightGrey};
  height: auto;
  position: relative;
`;

export const Title = styled.h6`
  color: black;
  display: block;
  font-size: 1rem;
  font-weight: bold;
  height: auto;
  margin-left: 7rem;
  margin-top: 1rem;
  position: relative;
  width: auto;
  z-index: 1;

  &:hover {
    color: ${colors.hoveredBlue};
    cursor: pointer;
  }

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: block;
    margin-left: 0.5rem;
    margin-top: 2rem;
    position: relative;

    ${({ percentageColor }) => percentageColor === 'white' && `
            color: white;
            margin-left: 0.09rem;
            margin-top: 0.5rem;

            &:hover {
              color: white;
              cursor: default;
              z-index: 103;
            }
          `}
    ${({ percentageColor }) => percentageColor !== 'white' && 'color: black;'}
  }
`;

export const PosterImg = styled.img`
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0rem;
  height: 100%;
  object-fit: fill;
  position: absolute;
  width: 6rem;
  z-index: -1;

  @media screen and (min-width: ${breakpoint.tablet}) {
    border-bottom-left-radius: 0rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    height: auto;
    position: relative;
    width: 100%;
  }
`;

export const CardDate = styled.div`
  color: ${colors.midGrey};
  margin-left: 7rem;
  margin-top: -1.5rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    margin-bottom: 1rem;
    margin-left: 0.5rem;
  }
`;

export const Circled = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    background-color: ${colors.darkGrey};
    border-radius: 3rem;
    display: block;
    height: 2.5rem;
    margin-left: 0.5rem;
    margin-top: -1rem;
    position: absolute;
    width: 2.5rem;
    z-index: 97;
  }
`;

export const ColoredCircle = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    ${({ percentage }) => (percentage >= 70 && `
            background: conic-gradient(
              ${colors.ratingGreen} 0,
              ${colors.ratingGreen} ${percentage}%,
              ${colors.lightRatingGreen} 0,
              ${colors.lightRatingGreen} 100%
            );
          `
  ) || (percentage >= 50 && percentage < 70 && `
            background: conic-gradient(
              ${colors.ratingYellow} 0,
              ${colors.ratingYellow} ${percentage}%,
              ${colors.lightRatingYellow} 0,
              ${colors.lightRatingYellow} 100%
            );
          `) || (percentage < 50 && `
        background: conic-gradient(
              ${colors.ratingRed} 0,
              ${colors.ratingRed} ${percentage}%,
              ${colors.lightRatingRed} 0,
              ${colors.lightRatingRed} 100%
            );
          `)}

    border-radius: 3rem;
    display: block;
    height: 2.2rem;
    margin-left: 0.12rem;
    margin-top: 0.13rem;
    position: absolute;
    width: 2.2rem;
    z-index: 98;
  }
`;

export const AboveCircle = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    background-color: ${colors.darkGrey};
    border-radius: 3rem;
    display: block;
    font-size: 0.9rem;
    height: 1.9rem;
    margin-left: 0.16rem;
    margin-top: 0.18rem;
    position: absolute;
    width: 1.9rem;
    z-index: 99;
  }
`;

export const ListButton = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    background-color: ${colors.transparentWhite};
    border-radius: 2rem;
    color: ${colors.veryDarkBlue};
    display: ${({ listShow }) => (listShow === true ? 'none' : 'block')};
    height: 1.35rem;
    position: absolute;
    right: 1rem;
    text-align: center;
    top: 0.5rem;
    width: 1.35rem;
    z-index: 124;

    &:hover {
      background-color: ${colors.midBlue};
      cursor: pointer;
    }
  }
`;

export const ListMenu = styled.div`
  background-color: white;
  border-bottom: 0.1rem solid grey;
  border-radius: 0.4rem;
  height: 10rem;
  margin-left: 4rem;
  margin-top: 2.25rem;
  position: absolute;
  width: 20rem;
  z-index: 131;
`;

export const ListMenuOptions = styled.div`
  ${({ boldHeader }) => (boldHeader === 'boldHeader' && `
          font-weight: bold;
        `)
    || (`
          border-bottom: ${({ midBorder }) => (midBorder === 'menuBorder' ? '0.1rem solid grey' : 'none')};
          color: grey;

          &:hover {
            background-color: ${colors.darkBlue};
            color: white;
            cursor: pointer;
          }
        `)}

  padding: 0.65rem;
  font-size: 1rem;
`;

export const TitleHovered = styled.div`
  background-color: grey;
  border: 0.2rem solid white;
  color: white;
  height: 4rem;
  width: 4rem;
`;

export const BlurryImage = styled.div`
  backdrop-filter: blur(1.25rem);
  height: 100%;
  left: 0rem;
  position: absolute;
  top: 0rem;
  width: 100%;
  z-index: 100;
`;

export const OverlayDiv = styled.div`
  bottom: 0rem;
  height: 100%;
  left: 0rem;
  position: fixed;
  right: 0rem;
  top: 0rem;
  width: 100%;
  z-index: 125;
`;

export const OverView = styled.p`
  border: none;
  display: inline-block;
  height: 2rem;
  margin-left: 7rem;
  margin-top: 1.5rem;
  overflow: hidden;
  width: auto;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;
