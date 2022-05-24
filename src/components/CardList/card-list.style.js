import styled from "styled-components";
import Breakpoint from "../Res/breakpoints";

export const MovieListContainer = styled.div`
  display: grid;
  position: relative;
  flex-wrap: wrap;
  gap: 1.5rem;
  grid-auto-rows: minmax(150px, 1fr);

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(350px, 1fr);
  }

  @media screen and (min-width: ${Breakpoint.bigScreen}) {
    grid-template-columns: repeat(5, minmax(auto, 1fr));
    grid-auto-rows: auto;
  }
`;

export default MovieListContainer;
