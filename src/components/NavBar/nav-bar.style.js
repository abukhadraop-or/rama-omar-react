import styled from 'styled-components';
import { ReactComponent as SmallNavLogo } from 'assets/smallNavLogo.svg';
import { colors } from 'styles/colors';
import breakpoint from 'styles/breakpoints';

export const NavBarHeader = styled.nav`
  background-color: ${colors.darkBlue};
  display: flex;
  height: 4rem;
  width: 100%;
`;

export const NavText = styled.h4`
  color: white;
  font-size: 1rem;
  font-weight: ${({ sign }) => (sign === 'plus' && 'bold')};
  padding-right: 1.5rem;
  padding-top: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  display: none;
  
  @media screen and (min-width: ${breakpoint.tablet}) {
    display: block;
    height: 4rem;
    margin-left: 13rem;
    padding-right: 1.5rem;
    width: 10rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavTextSelect = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
  height: fit-content;
  width: 4rem;
`;

export const NavTextOption = styled.div`
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export const RightNavText = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: flex;
    margin-right: 15rem;
    overflow: hidden;
  }
`;

export const LeftNavText = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: flex;
    flex-grow: 1;
  }
`;

export const SmallNavImg = styled(SmallNavLogo)`
  display: flex;
  flex-grow: 1;
  height: 3rem;
  justify-content: center;
  margin-top: 0.5rem;
  width: 8rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

export const SmallNavMenu = styled.div`
  display: block;
  height: 4rem;
  margin-left: 3rem;
  margin-top: 1.3rem;
  position: absolute;
  width: 2rem;
 
  path {
    color:lin;
  }

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

export const MenuLines = styled.div`
  background-color: white;
  border-radius: 0.3rem;
  height: 0.3rem;
  margin-top: 0.2rem;
  width: 100%;
`;
