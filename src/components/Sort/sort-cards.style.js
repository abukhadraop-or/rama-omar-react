import styled, { css } from "styled-components";

export const SortCard = styled.div`
  width: 100%;
  height: 3rem;
  border: solid 0.1rem #ededed;
  box-shadow: 0.2rem 0.2rem 0.2rem #ededed;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  &:hover {
    cursor: pointer;
  }
  z-index: 132;

  @media screen and (min-width: 769px) {
    width: 18rem;
  }
`;

export const SortText = styled.p`
  color: black;
  font-weight: bold;
  margin-left: 1rem;
`;

export const Contn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 133;
  margin-left: 3rem;
  margin-right: 2rem;

  @media screen and (min-width: 769px) {
    margin-left: 6rem;
    margin-right: 2rem;
  }
`;

export const ShowedDetails = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: -1.2rem;
  border: solid 0.1rem #ededed;
  box-shadow: 0.2rem 0.2rem 0.2rem #ededed;
  border-top: none;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: ${(props) => (props.disp === true ? "block" : "none")};

  @media screen and (min-width: 769px) {
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
  background-color: #ededed;
  border: none;
  border-radius: 0.3rem;
  &:hover {
    background-color: #d3d3d3;
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
  ${(props) =>
    props.disable === "false"
      ? css`
          background-color: #01b4e4;
          &:hover {
            background-color: #0d253f;
          }
        `
      : css`
          disabled: disabled;
          color: grey;
        `}

  z-index: 134;

  @media screen and (min-width: 769px) {
    width: 18rem;
  }
`;

export const Populr = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
`;
