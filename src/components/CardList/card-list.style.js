import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const MovieListContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 1.5rem;
  grid-auto-rows: minmax(170px, 1fr);
  grid-template-columns: minmax(150px, 1fr);
  position: relative;

  @media screen and (min-width: ${breakpoint.tablet}) {
    gap: 2rem;
    grid-auto-rows: minmax(350px, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-auto-rows: auto;
    grid-template-columns: repeat(5, minmax(auto, 1fr));
  }
`;

export default MovieListContainer;
