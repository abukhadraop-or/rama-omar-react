import styled, { css } from "styled-components";

export const FooterNav = styled.footer`
  background-color: #0d253f;
  width: 100%;
  height: 60rem;
  @media screen and (min-width: 769px) {
    height: 25rem;
  }
`;

export const FooterImage = styled.img`
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
    height: 9rem;
    width: 9rem;
    margin-top: 5rem;
  }
`;

export const FooterInfo = styled.p`
  color: white;
  ${(props) =>
    props.title === "Title"
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
          &:hover {
            cursor: pointer;
          }
        `}
`;

export const FooterCont = styled.div`
  float: none;
  margin-bottom: 1rem;

  @media screen and (min-width: 769px) {
    position: relative;
    float: left;
  }
`;

export const FooterContainer = styled.div`
  flex-direction: column;
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  gap: 5%;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const FooterWrapper = styled.div`
  grid-template-columns: minmax(50px, 1fr);
  gap: 0.5rem;
  grid-template-rows: auto;
  display: grid;
  margin-top: 5rem;
  
  @media screen and (min-width: 769px) {
    grid-template-rows: repeat(auto-fit, minmax(70px, 1fr));
    grid-template-columns: repeat(4, minmax(70px, 1fr));
    gap: 3rem;
  }
`;
