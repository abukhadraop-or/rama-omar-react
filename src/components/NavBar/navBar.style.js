import styled from "styled-components";

export const NavBarHeader = styled.nav`
  background-color: #0d253f;
  width: 100%;
  height: 4em;
  padding-right: 10%;
  overflow-x: hidden;
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
  font-weight: ${(props) => (props.sign === "plus" ? "bold" : " ")}
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

export const NavTextSelect= styled.div`
height: fit-content;
width: 4em;
background-color: white;
border: 0.1em solid black;
border-radius: 0.5em;
`;

export const NavTextOption= styled.div`
&:hover{
    background-color: grey;
    cursor: pointer;
}
`;

export const RightNavText= styled.div`
  float: right;
  margin-right: 17%;
  `;

  export const LeftNavText= styled.div`
  float: left;
  margin-left: 13%;
  `;