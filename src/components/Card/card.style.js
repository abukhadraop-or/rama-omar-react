import styled, { css } from "styled-components";
import { Colors } from "../Res/colors";
import Breakpoint from "../Res/breakpoints";

export const Container = styled.div`
  border-radius: 0.5rem;
  border: solid 0.1rem ${Colors.lightGrey};
  box-shadow: 0.2rem 0.2rem 0.2rem ${Colors.lightGrey};
  position: relative;
`;

export const Title = styled.p`
  color: black;
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
  position: relative;
  margin-left: 7rem;
  margin-top: -8.5rem;
  width: auto;
  z-index: 1;
  height: auto;

  &:hover {
    color: ${Colors.hoveredBlue};
    cursor: pointer;
  }

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    display: block;
    margin-left: 0.5rem;
    margin-top: 2rem;
    position: relative;

    ${({ percentageColor }) =>
      percentageColor === "white" &&
      `
            color: white;
            margin-top: 0.5rem;
            margin-left: 0.09rem;

            &:hover {
              color: white;
              cursor: default;
              z-index: 103;
            }
          `}
    ${({ percentageColor }) =>
      percentageColor !== "white" &&
      `
      color: black;`}
  }
`;

export const PosterImg = styled.img`
  width: 6rem;
  height: 100%;
  border-top-right-radius: 0rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  object-fit: fill;
  z-index: -1;
  position: relative;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    width: 100%;
    height: auto;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0rem;
  }
`;

export const CardDate = styled.div`
  margin-left: 7rem;
  color: ${Colors.midGrey};

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    margin-left: 0.5rem;
  }
`;

export const Circled = styled.div`
  display: none;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    background-color: ${Colors.darkGrey};
    border-radius: 3rem;
    height: 2.5rem;
    width: 2.5rem;
    margin-top: -1rem;
    margin-left: 0.5rem;
    z-index: 97;
    position: absolute;
    display: block;
  }
`;

export const ColoredCircle = styled.div`
  display: none;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    ${({ percentage }) =>
      (percentage >= 70 &&
        `
            background: conic-gradient(
              ${Colors.ratingGreen} 0,
              ${Colors.ratingGreen} ${percentage}%,
              ${Colors.lightRatingGreen} 0,
              ${Colors.lightRatingGreen} 100%
            );
          `) ||
      (percentage >= 50 &&
        percentage < 70 &&
        `
            background: conic-gradient(
              ${Colors.ratingYellow} 0,
              ${Colors.ratingYellow} ${percentage}%,
              ${Colors.lightRatingYellow} 0,
              ${Colors.lightRatingYellow} 100%
            );
          `) ||
      (percentage < 50 &&
        `
        background: conic-gradient(
              ${Colors.ratingRed} 0,
              ${Colors.ratingRed} ${percentage}%,
              ${Colors.lightRatingRed} 0,
              ${Colors.lightRatingRed} 100%
            );
          `)}

    height: 2.2rem;
    width: 2.2rem;
    display: block;
    border-radius: 3rem;
    z-index: 98;
    margin-top: 0.13rem;
    margin-left: 0.12rem;
    position: absolute;
  }
`;

export const AboveCircle = styled.div`
  display: none;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    background-color: ${Colors.darkGrey};
    z-index: 99;
    height: 1.9rem;
    width: 1.9rem;
    border-radius: 3rem;
    position: absolute;
    margin-top: 0.18rem;
    margin-left: 0.16rem;
    font-size: 0.9rem;
    display: block;
  }
`;

export const ListButton = styled.div`
  display: none;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 2rem;
    background-color: ${Colors.transparentWhite};
    z-index: 124;
    text-align: center;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: ${Colors.veryDarkBlue};
    &:hover {
      background-color: ${Colors.midBlue};
      cursor: pointer;
    }
    display: ${({ listShow }) => (listShow === true ? "none" : "block")};
  }
`;

export const ListMenu = styled.div`
  background-color: white;
  z-index: 131;
  position: absolute;
  width: 20rem;
  height: 10rem;
  margin-left: 4rem;
  margin-top: 2.25rem;
  border-radius: 0.4rem;
  border-bottom: 0.1rem solid grey;
`;

export const ListMenuOptions = styled.div`
  ${({ boldHeader }) =>
    boldHeader === "boldHeader"
      ? css`
          font-weight: bold;
        `
      : css`
          border-bottom: ${({ midBorder }) =>
            midBorder === "menuBorder" ? "0.1rem solid grey" : "none"};
          color: grey;

          &:hover {
            color: white;
            background-color: ${Colors.darkBlue};
            cursor: pointer;
          }
        `}

  padding: 0.65rem;
  font-size: 1rem;
`;

export const TitleHovered = styled.div`
  background-color: grey;
  color: white;
  border: 0.2rem solid white;
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
  height: 100%;
  width: 100%;
  left: 0rem;
  bottom: 0rem;
  right: 0rem;
  top: 0rem;
  position: fixed;
  z-index: 125;
`;

export const OverView = styled.p`
  display: inline-block;
  position: absolute;
  margin-top: 1.5rem;
  margin-left: 7rem;
  overflow: hidden;
  width: auto;
  height: 2rem;
  border: none;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    display: none;
  }
`;
