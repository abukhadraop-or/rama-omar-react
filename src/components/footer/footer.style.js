import styled, { css } from "styled-components";

export const FooterNav = styled.footer`
  background-color: #0d253f;
  width: 100%;
  height: 20em;
  padding-right: 10%;
  @media screen and (max-width: 576px) {
  }
`;

export const FooterImage = styled.img`
  height: 9em;
  width: 9em;
  margin-top: 5em;
  margin-left: 15%;
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
`;

export const FooterContainer = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  gap: 30px;
  margin-top: 5em;
`;
