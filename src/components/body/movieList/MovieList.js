import React from "react";
import { Card } from "primereact/card";

import { Link } from "react-router-dom";

import "../../../styles/styles.scss";

import noImage from '../../../assets/noImage.png'

export const MovieList = (props) => {
  return (
    <div className="card-container">
      {props.movies.map((movie, index) => (
        <Card
          className="card"
          key={index}
          title={movie.Title}
          subTitle={movie.Year}
        >
          <div className="imgBox">
            <Link to={`/movie/${movie.imdbID}`}>
              {movie.Poster !== "N/A" ? (
                <img src={movie.Poster} alt={"movie"}></img>
              ) : (
                <img src={noImage} alt={"movie"}></img>
              )}
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};
