import styled, { css } from "styled-components";
import { Colors } from "../Res/colors";
import Breakpoint from "../Res/breakpoints";

export const SortCard = styled.div`
  width: 100%;
  height: 3rem;
  border: solid 0.1rem ${Colors.lightGrey};
  box-shadow: 0.2rem 0.2rem 0.2rem ${Colors.lightGrey};
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  z-index: 132;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    width: 18rem;
  }
`;

export const SortText = styled.p`
  color: black;
  font-weight: bold;
  margin-left: 1rem;
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 133;
  margin-left: 3rem;
  margin-right: 2rem;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    margin-left: 6rem;
    margin-right: 2rem;
  }
`;

export const ShowedDetails = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: -1.2rem;
  border: solid 0.1rem ${Colors.lightGrey};
  box-shadow: 0.2rem 0.2rem 0.2rem ${Colors.lightGrey};
  border-top: none;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: ${({ displayDetails }) =>
    displayDetails === true ? "block" : "none"};

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    width: 18rem;
  }
`;

export const ShowedText = styled.p`
  color: grey;
  margin-left: 1rem;
  padding-top: 1rem;
`;

export const DropMenu = styled.select`
  width: 90%;
  height: 2.7rem;
  margin-left: 1rem;
  background-color: ${Colors.lightGrey};
  border: none;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${Colors.veryLightGrey};
  }
`;

export const DropOption = styled.option`
  color: black;
  background-color: white;
`;

export const SortForm = styled.form`
  border: none;
`;

export const SortBtn = styled.button`
  border: none;
  border-radius: 2rem;
  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  z-index: 134;

  ${({ disable }) =>
    disable === "false"
      ? css`
          background-color: ${Colors.midBlue};
          &:hover {
            background-color: ${Colors.darkBlue};
          }
        `
      : css`
          disabled: disabled;
          color: grey;
        `}

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    width: 18rem;
  }
`;

export const PopularTitle = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
`;
