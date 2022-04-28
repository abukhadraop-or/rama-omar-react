import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8em;
  margin-left: 10%;
  width: 100%;

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 2em;
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

  @media screen and (min-width: 577px ){
    width: 70%;
  }
`;

export const CardContainer = styled.div`
  width: 75%;
  height: 100%;
  margin-right: 10em;
  margin-left: 6em;
  @media screen and (max-width: 768px){
    width: 100%;
    margin-left: 3em;
  } 
`;
