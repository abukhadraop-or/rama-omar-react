//import { useState } from "react";
import {
  LeftNavText,
  Logo,
  NavBarHeader,
  NavText,
  RightNavText,
  //   NavTextOption,
  //   NavTextSelect,
} from "./navBar.style";

export function NavBar() {
  //const [NavHover, setNavHover] = useState(false);

  return (
    <NavBarHeader>
      <LeftNavText>
        <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        <NavText>Movies</NavText>
        {/* 
      onClick={setNavHover(!NavHover)}
      {NavHover===true && (
        <NavTextSelect>
          <NavTextOption>Popular</NavTextOption>
        </NavTextSelect>
      )} */}
        <NavText>TV Shows</NavText>

        <NavText>People</NavText>

        <NavText>More</NavText>
      </LeftNavText>

      <RightNavText>
        <NavText sign={"plus"}>+</NavText>

        <NavText>EN</NavText>

        <NavText>Login</NavText>

        <NavText>Join TMDB</NavText>
      </RightNavText>
    </NavBarHeader>
  );
}

export default NavBar;
