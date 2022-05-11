import styled, { css } from "styled-components";

export const FooterNav = styled.footer`
  background-color: #0d253f;
  width: 100%;
  height: 20em;
  //padding-right: 10%;
  @media screen and (max-width: 768px) {
    height: 60em;
  }
`;

export const FooterImage = styled.img`
  height: 9em;
  width: 9em;
  margin-top: 5em;
  margin-left: 15%;

  @media screen and (max-width: 768px) {
    display: none;
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
  position: relative;
  float: left;

  @media screen and (max-width: 768px){
    float: none;
    margin-bottom: 1rem;;
  }
`;

export const FooterContainer = styled.div`
  //width: 95%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 3rem;
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  gap: 30px;
  margin-top: 5em;
  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(50px, 1fr);
    gap: 0.5rem;
    grid-template-rows: auto;
  }
`;
