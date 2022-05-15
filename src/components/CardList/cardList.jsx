//import { render } from "@testing-library/react";
import {
  Conts,
  //TitleHovered,
} from "./card-list.style";

import Card from '../Card/Card';

export const CardList = ({ movies }) => {

  return (
    <Conts>
      {movies.map((movie) => {
        return(
          <Card movieO = {movie} />
        );
      })
    }

    </Conts>
  );
}


export default CardList;
