import styled, { css } from "styled-components";

export const Container = styled.div`
  border-radius: 0.5rem;
  border: solid 0.1rem #ededed;
  box-shadow: 0.2rem 0.2rem 0.2rem #ededed;
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
    color: #1eb6ff;
    cursor: pointer;
  }

  @media screen and (min-width: 769px) {
    display: block;
    margin-left: 0.5rem;
    margin-top: 2rem;
    position: relative;

    ${(props) =>
      props.percentage === "white"
        ? css`
            color: white;
            margin-top: 0.5rem;
            margin-left: 0.09rem;
            &:hover {
              color: white;
              cursor: default;
              z-index: 103;
            }
          `
        : css`
            color: black;
          `}
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

  @media screen and (min-width: 769px) {
    width: 100%;
    height: auto;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0rem;
  }
`;

export const CardDate = styled.p`
  margin-top: -0.5rem;
  display: block;
  margin-left: 7rem;
  position: absolute;
  color: #949494;
  height: auto;

  @media screen and (min-width: 769px) {
    margin-top: 0rem;
    margin-left: 0.5rem;
    position: relative;
    width: auto;
  }
`;

export const Circled = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
    background-color: #222222;
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

  @media screen and (min-width: 769px) {
    ${(props) =>
      props.per >= 70
        ? css`
            background: conic-gradient(
              #4bce7b 0,
              #4bce7b ${(porps) => porps.per}%,
              rgba(75, 206, 123, 0.35) 0,
              rgba(75, 206, 123, 0.35) 100%
            );
          `
        : props.per >= 50 && props.per < 70
        ? css`
            background: conic-gradient(
              #ffef63 0,
              #ffef63 ${(porps) => porps.per}%,
              rgba(239, 246, 3, 0.35) 0,
              rgba(239, 246, 3, 0.35) 100%
            );
          `
        : css`
            background: conic-gradient(
              #ff0000 0,
              #ff0000 ${(porps) => porps.per}%,
              rgba(255, 0, 0, 0.35) 0,
              rgba(255, 0, 0, 0.35) 100%
            );
          `}

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

@media screen and (min-width: 769px){
  background-color: #222222;
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

  @media screen and (min-width: 769px) {
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 124;
    text-align: center;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: rgba(0, 0, 0, 0.4);
    &:hover {
      background-color: #01b4e4;
      cursor: pointer;
    }
    display: ${(props) => (props.ListShow === true ? "none" : "block")};
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
  ${(props) =>
    props.Opt === "hd"
      ? css`
          font-weight: bold;
        `
      : css`
          border-bottom: ${(props) =>
            props.Bd === "brder" ? "0.1rem solid grey" : "none"};
          color: grey;
          &:hover {
            color: white;
            background-color: #0d253f;
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
  //box-sizing: border-box;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
