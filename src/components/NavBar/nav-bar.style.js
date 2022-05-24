import styled from 'styled-components';
import { Colors } from '../Res/colors';
import Breakpoint from '../Res/breakpoints';

export const NavBarHeader = styled.nav`
  background-color: ${Colors.darkBlue};
  width: 100%;
  height: 4rem;
  overflow: hidden;
`;

export const NavText = styled.p`
  color: white;
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-right: 1.5rem;
  float: left;
  font-weight: ${({ sign }) => (sign === 'plus' ? 'bold' : 'none')};

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  float: left;
  width: 10rem;
  height: 4rem;
  padding-right: 1.5rem;
  margin-left: 10%;

  &:hover {
    cursor: pointer;
  }
`;

export const NavTextSelect = styled.div`
  height: fit-content;
  width: 4rem;
  background-color: white;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
`;

export const NavTextOption = styled.div`
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export const RightNavText = styled.div`
  display: none;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    display: block;
    float: right;
    margin-right: 9rem;
    width: 9rem;
  }
`;

export const LeftNavText = styled.div`
  display: none;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    display: block;
    float: left;
    margin-left: 2rem;
    width: 35rem;
  }
`;

export const SmallNavImg = styled.img`
  display: block;
  width: 8rem;
  height: 2.5rem;
  margin-left: 40%;
  margin-top: 0.5rem;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    display: none;
  }
`;

export const SmallNavMenu = styled.div`
  display: block;
  position: absolute;
  width: 2rem;
  height: 4rem;
  float: left;
  margin-left: 3rem;
  margin-top: 1.3rem;

  @media screen and (min-width: ${Breakpoint.landscapeMood}) {
    display: none;
  }
`;

export const MenuLines = styled.div`
  height: 0.3rem;
  width: 100%;
  background-color: white;
  margin-top: 0.2rem;
  border-radius: 0.3rem;
`;
