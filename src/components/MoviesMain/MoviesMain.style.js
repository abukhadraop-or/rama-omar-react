import styled, { css } from "styled-components";

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  //width: 100%;
  /* box-sizing: border-box;  */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    //gap: 2em;
    /* margin-right: 4rem; */
  }

  @media screen and (min-width: 769px) {
    //padding-left: 2rem;
  }

  @media screen and (min-width: 1440px) {
   //padding-left: 12rem;
  }
`;

export const LoadMoreButton = styled.button`
  width: 100%;
  height: 2em;
  border: none;
  border-radius: 0.4em;
  margin-top: 2em;
  margin-bottom: 1.5em;
  background-color: #01b4e4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  &:hover {
    color: #0d253f;
    cursor: pointer;
  }
  z-index: 135;

  @media screen and (max-width: 768px) {
    //width:100%;
    //width: 10%;
    //margin-right: 2em;
  }
`;

export const CardContainer = styled.div`
  //width: 75%;
  //width: 100%;
  height: 100%;
  margin-right: 10em;
  margin-left: 6em;
  margin-top: 4rem;
  @media screen and (max-width: 768px) {
    //width: 100%;
    margin-left: 3rem;
    margin-right: 2rem;
  }
`;

export const LeftMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.apper === true
        ? css`
            display: block;
            position: fixed;
            width: 85%;
            height: 100%;
            background-color: #303756;
            z-index: 200;
          `
        : css`
            display: none;
          `}
  }
`;

export const MenuTitles = styled.h6`
  font-size: 1.5rem;
  color: white;
  padding-left: 2rem;
  margin-bottom: -2rem;
`;

export const MenuInfo = styled.h6`
  margin-top: 5rem;
  margin-bottom: -4rem;
  font-size: 1rem;
  color: #a2a6bb;
  padding-left: 2rem;
`;
