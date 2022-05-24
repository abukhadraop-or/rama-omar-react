import styled, { css } from "styled-components";
import { Colors } from "../Res/colors";
import Breakpoint from "../Res/breakpoints";

export const Divider = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
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
  background-color: ${Colors.midBlue};
  color: white;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: ${Colors.darkBlue};
    cursor: pointer;
  }
  z-index: 135;
`;

export const CardContainer = styled.div`
  margin-left: 3rem;
  margin-right: 2rem;
  height: 100%;
  margin-top: 7rem;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    margin-right: 6rem;
    margin-left: 6rem;
  }
`;

export const LeftMenu = styled.div`
  ${({ appearMenu }) =>
    appearMenu === true
      ? css`
          display: block;
          position: fixed;
          width: 85%;
          height: 100%;
          background-color: ${Colors.mediumDarkBlue};
          z-index: 200;
        `
      : css`
          display: none;
        `}

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    display: none;
  }
`;

export const MenuTitles = styled.h6`
  font-size: 1.5rem;
  color: white;
  padding-left: 2rem;
  margin: 0;
  margin-top: 2.5rem;
  cursor: pointer;
`;

export const MenuInfo = styled.h6`
  margin: 0;
  margin-top: 2.5rem;
  font-size: 1rem;
  color: ${Colors.lightGreyishBlue};
  padding-left: 2rem;
  cursor: pointer;
`;
