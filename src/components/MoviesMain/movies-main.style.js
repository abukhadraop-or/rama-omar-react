import styled, { css } from "styled-components";

export const Divider = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const LoadMoreButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.4rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  background-color: #01b4e4;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    color: #0d253f;
    cursor: pointer;
  }
  z-index: 135;
`;

export const CardContainer = styled.div`
  margin-left: 3rem;
  margin-right: 2rem;
  height: 100%;
  margin-top: 7rem;

  @media screen and (min-width: 769x) {
    margin-right: 10rem;
    margin-left: 6rem;
  }
`;

export const LeftMenu = styled.div`
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

  @media screen and (min-width: 769px) {
    display: none;

  }
`;

export const MenuTitles = styled.h6`
  font-size: 1.5rem;
  color: white;
  padding-left: 2rem;
  margin-bottom: -2rem;
  cursor: pointer;
`;

export const MenuInfo = styled.h6`
  margin-top: 5rem;
  margin-bottom: -4rem;
  font-size: 1rem;
  color: #a2a6bb;
  padding-left: 2rem;
  cursor: pointer;
`;
