import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Hero.css";

const Hero = ({ movies }) => {
  // Ensure that movies is an array before using map
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <Carousel>
        {movies?.map((movie, index) => {
          return (
            <Paper key={index}>
              <div className="movie-card-container">
                <div className="movie-card">
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
