import React from "react";
import GridItem from "./GridItem";
import "./GridList.css";

const GridList = (props) => {
  let movieList = props.movieList.map(movie => {
    return <GridItem key={movie.movie} image={movie.img} movie={movie.movie} />
  });

  return (
    <ul className="gridList">
      {movieList}
    </ul>

  );
}

export default GridList;
