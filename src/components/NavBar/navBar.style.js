import styled from "styled-components";

export const NavBarHeader = styled.nav`
  background-color: #0d253f;
  width: 100%;
  height: 4em;
  //padding-right: 10%;
  overflow: hidden;
`;

export const NavText = styled.p`
  color: white;
  font-size: 1em;
  padding-top: 0.5em;
  padding-right: 1.5em;
  float: left;
  &:hover {
    cursor: pointer;
  }
  font-weight: ${(props) => (props.sign === "plus" ? "bold" : " ")};
`;

export const Logo = styled.img`
  float: left;
  width: 10em;
  height: 4em;
  padding-right: 1.5em;
  margin-left: 10%;
  &:hover {
    cursor: pointer;
  }
`;

export const NavTextSelect = styled.div`
  height: fit-content;
  width: 4em;
  background-color: white;
  border: 0.1em solid black;
  border-radius: 0.5em;
`;

export const NavTextOption = styled.div`
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export const RightNavText = styled.div`
  float: right;
  margin-right: 9rem;
  //margin-left: 6rem;
  width: 9rem;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const LeftNavText = styled.div`
  float: left;
  //margin-right: 10rem;
  margin-left: 2rem;
  width: 35rem;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const SmallNavImg = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 8em;
    height: 2.5em;
    margin-left:40%;
    margin-top: 0.5rem;
}
`;

export const SmallNavMenu = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    width: 2rem;
    height: 2rem;
    float: left;
    margin-left: 3rem;
    margin-top: 1rem;
  }
`;
