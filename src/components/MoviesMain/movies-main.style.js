import styled from 'styled-components';
import { colors } from 'styles/colors';
import breakpoint from 'styles/breakpoints';

export const Divider = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
    margin-left: 10rem;
  }

  @media screen and (min-width: ${breakpoint.laptop}){
    margin-right: 10rem;
  }
`;

export const LoadMoreButton = styled.button`
  background-color: ${colors.midBlue};
  border-radius: 0.4rem;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3rem;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  width: 100%;

  &:hover {
    color: ${colors.darkBlue};
    cursor: pointer;
  }
  z-index: 135;
`;

export const CardContainer = styled.div`
  height: 100%;
  margin-left: 3rem;
  margin-right: 2rem;
  margin-top: 7rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-basis: 75%;
    margin-left: 0;
    margin-right: 6rem;
  }
`;

export const LeftMenu = styled.div`
  ${({ appearMenu }) => (appearMenu === true
    && `
          background-color: ${colors.mediumLightDarkBlue};
          display: block;
          height: 100%;
          position: fixed;
          width: calc(100% - 5rem);
          z-index: 200;
        `)
    || (`
          display: none;
        `)}

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

export const MenuTitles = styled.h6`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding-top: 1.5rem;
  margin: 0;
  padding-left: 2rem;
`;

export const MenuInfo = styled.h6`
  color: ${colors.lightGreyishBlue};
  cursor: pointer;
  font-size: 1rem;
  padding-top: 1.5rem;
  margin: 0;
  padding-left: 2rem;
`;
