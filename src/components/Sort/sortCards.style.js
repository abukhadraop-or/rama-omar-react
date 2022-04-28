import styled, { css } from "styled-components";

export const SortCard = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  
  width: 16em;
  height: 3em;
  border: solid 0.1em #d3d3d3;
  box-shadow: 0.1em 0.1em #d3d3d3;
  border-radius: 0.5em;
  margin-top: 0.75em;
  &:hover {
    cursor: pointer;
  }
  z-index: 132;
`;

export const SortText = styled.p`
  color: black;
  font-weight: bold;
  margin-left: 1em;
`;

export const Contn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2em;
  @media screen and (max-width: 2560px) {
    margin-left: 6em;
    margin-right: -2%;
  }
  @media screen and (max-width: 576px) {
    display: block;
  }
  z-index: 133;

  @media screen and (max-width: 768px){
    margin-left: 3em;
    margin-right: 2em;
  }
`;

export const ShowedDetails = styled.div`
  height: 7em;
  width: 16em;
  margin-top: -0.15em;
  border: solid 0.1em #d3d3d3;
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  display: ${(props) => (props.disp === true ? "block" : "none")};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ShowedText = styled.p`
  color: grey;
  margin-left: 1em;
`;

export const DropMenu = styled.select`
  width: 90%;
  height: 2.7em;
  margin-left: 1em;
  background-color: #ededed;
  border: none;
  border-radius: 0.3em;
  &:hover {
    background-color: #d3d3d3;
  }

  @media screen and (max-width: 768px){
    margin-left: 2.5em;
  }
  
`;

export const DropOption = styled.option`
  color: black;
  background-color: white;
`;

export const SortForm = styled.form`
  border: none;
  width: 100%;
`;


export const SortBtn = styled.button`
  border: none;
  border-radius: 2em;
  width: 16em;
  height: 3em;
  margin-top: 2em;
  color: white;
  font-weight: bold;
  font-size: 1em;
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

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export const Populr = styled.p`
  font-size: 2em;
  margin-top: 2em;
`;
