import styled from "styled-components";


export const Conts = styled.div`
  display: grid;
  position: relative;
  margin-top: 5em;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(150px, 100%);
    grid-auto-rows: minmax(100px, 150px);
    gap: 1.5em;
    margin-right: 5em;

  }
  @media screen and (min-width: 769px) {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(350px, 1fr);
  }

  @media screen and (min-width: 1400px) {
    width: 70%;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    grid-auto-rows: minmax(350px, 1fr);
  }
`;

