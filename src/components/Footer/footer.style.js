import styled from 'styled-components';
import { colors } from 'styles/colors';
import breakpoint from 'styles/breakpoints';

export const FooterNav = styled.footer`
  background-color: ${colors.darkBlue};
  height: 60rem;
  width: 100%;

  @media screen and (min-width: ${breakpoint.tablet}) {
    height: 25rem;
  }
`;

export const FooterImage = styled.img`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: block;
    height: 9rem;
    margin-top: 5rem;
    width: 9rem;
  }
`;

export const FooterInfo = styled.p`
  color: white;

  ${({ title }) => (title === 'Title'
    && `
          font-weight: bold;
        `)
     || (`
          font-weight: normal;

          &:hover {
            cursor: pointer;
         }
        `)}
`;

export const FooterCont = styled.div`
  float: none;
  margin-bottom: 1rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    float: left;
    position: relative;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  margin-left: 3rem;
  
  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: minmax(50px, 1fr);
  grid-template-rows: auto;
  margin-top: 5rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    gap: 3rem;
    grid-template-columns: repeat(4, minmax(70px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(70px, 1fr));
  }
`;
