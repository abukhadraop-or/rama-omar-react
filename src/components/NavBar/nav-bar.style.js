import styled from "styled-components";

export const NavBarHeader = styled.nav`
  background-color: #0d253f;
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
  &:hover {
    cursor: pointer;
  }
  font-weight: ${(props) => (props.sign === "plus" ? "bold" : "none")};
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

  @media screen and (min-width: 769px) {
    display: block;
    float: right;
    margin-right: 9rem;
    width: 9rem;
  }
`;

export const LeftNavText = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
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

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const SmallNavMenu = styled.img`
  display: block;
  position: absolute;
  width: 2rem;
  height: 2rem;
  float: left;
  margin-left: 3rem;
  margin-top: 1rem;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
