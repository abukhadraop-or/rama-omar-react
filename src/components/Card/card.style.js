//import React from "react";
import styled, { css } from "styled-components";
//margin: 2em;  margin-bottom: 4.5em;
//object-fit: cover
//  flex-wrap: wrap;
/*height: 24.5em;
  width: 11.75em;
   height: 100%;
  width: 60%;*/
//  grid-template-rows: minmax(350px, auto);

export const Container = styled.div`
  border-radius: 0.5em;
  border: solid 0.1em #d3d3d3;
  box-shadow: 0.1em 0.1em #d3d3d3;
  position: relative;
`;

export const Title = styled.p`
  font-size: 0.9em;
  margin-left: 0.5em;
  margin-top: 2em;
  color: black;
  font-weight: bold;
  &:hover {
    color: #1eb6ff;
    cursor: pointer;
  }
  position: relative;
  z-index: 1;
  ${(props) =>
    props.percentage === "white"
      ? css`
          color: white;
          margin-top: 0.5em;
          margin-left: 0.09em;
          &:hover {
            color: white;
            cursor: default;
          }
        `
      : css`
          color: black;
        `}

  @media screen and (max-width: 768px) {
    display: inline;
    position: absolute;
    margin-left: 1em;
  }
`;

export const PosterImg = styled.img`
  @media screen and (max-width: 768px){
    width:6em;
    height:100%;
    border-top-right-radius: 0em;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
  }

  @media screen and (min-width: 769px){
    width: 100%;
    height: 72%;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
  
  object-fit: fill;
  z-index: -1;
  position: relative;
`;

export const CardDate = styled.p`
  color: #949494;
  margin-left: 0.5em;
  position: relative;

  @media screen and (max-width: 768px){
    float: right;
    margin-top: 3.5em;
    display: inline;
    margin-left: 1em;
    position: absolute;
  }
`;

export const Conts = styled.div`
  display: grid;
  position: relative;
  margin-top: 5em;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(150px, 100%);
    grid-auto-rows: minmax(100px, 150px);
    gap: 1.5em;
    margin-right: 5em;

  }
  @media screen and (min-width: 769px) {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(350px, 1fr);
  }

  @media screen and (min-width: 1400px) {
    width: 70%;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    grid-auto-rows: minmax(350px, 1fr);
  }
`;

export const Circled = styled.div`
  background-color: #222222;
  border-radius: 3em;
  height: 2.3em;
  width: 2.3em;
  margin-top: -1em;
  margin-left: 0.5em;
  z-index: 1;
  position: absolute;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ColoredCircle = styled.div`
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

  height: 1.95em;
  width: 1.95em;
  border-radius: 3em;
  z-index: 2;
  margin-top: 0.2em;
  margin-left: 0.17em;
  position: absolute;
`;

export const AboveCircle = styled.div`
  background-color: #222222;
  z-index: 3;
  height: 1.9em;
  width: 1.9em;
  border-radius: 3em;
  position: absolute;
  margin-top: 0.11em;
  margin-left: 0.16em;
  color: white;
  font-size: 0.9em;
`;

export const ListButton = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  width: 1.35em;
  height: 1.35em;
  border-radius: 2em;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 130;
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
`;

export const ListMenu = styled.div`
  background-color: white;
  z-index: 131;
  position: absolute;
  width: 20em;
  height: 10em;
  margin-left: 4em;
  margin-top: 2.25em;
  border-radius: 0.4em;
  border-bottom: 0.1em solid grey;
`;

export const ListMenuOptions = styled.div`
  ${(props) =>
    props.Opt === "hd"
      ? css`
          font-weight: bold;
        `
      : css`
          border-bottom: ${(props) =>
            props.Bd === "brder" ? "0.1em solid grey" : "none"};
          color: grey;
          &:hover {
            color: white;
            background-color: #0d253f;
            cursor: pointer;
          }
        `}
  padding: 0.65em;
  font-size: 1em;
`;

export const TitleHovered = styled.div`
  background-color: grey;
  color: white;
  border: 0.2em solid white;
  height: 4em;
  width: 4em;
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

export const OverView=styled.div`
  display: none;
  @media screen and (max-width: 768px){
    display: inline;
    position: absolute;
    margin-top: 5em;
    margin-left: 1em;
    height:2.7em;
  }
`;