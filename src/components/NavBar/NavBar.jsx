import { useState } from "react";
import {
  LeftNavText,
  Logo,
  NavBarHeader,
  NavText,
  RightNavText,
  SmallNavImg,
  SmallNavMenu,
} from "./nav-bar.style";

import menuImage from "../../assets/images/menuWhiteTr.png"

export function NavBar({setDisplayMenu}) {
  const [menuAppear, setMenuAppear]= useState(false)

  /*
  *Toggles the menuAppear to set the setDisplayMenu to be sent to the MoviesMain to display a menu on the whole page
  */
  const menuAppearHandler = () =>{
    setMenuAppear(!menuAppear);
    setDisplayMenu(menuAppear);
  };

  return (
    <NavBarHeader>
      
      <SmallNavMenu src=
      {menuImage} onClick={menuAppearHandler} />
      <SmallNavImg src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
      
      <LeftNavText>
        <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        <NavText>Movies</NavText>
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
