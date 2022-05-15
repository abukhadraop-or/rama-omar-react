import styled from "styled-components";

export const Conts = styled.div`
  display: grid;
  position: relative;
  flex-wrap: wrap;
  gap: 1.5rem;
  grid-auto-rows: minmax(150px, 1fr);

  @media screen and (min-width: 769px) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(350px, 1fr);
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, minmax(auto, 1fr));
    grid-auto-rows: auto;
  }
`;
