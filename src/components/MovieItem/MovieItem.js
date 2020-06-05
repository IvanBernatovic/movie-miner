import React from "react"
import "./MovieItem.css"
import ScoreBar from "./ScoreBar"

const MovieItem = (props) => {
  const year = () => {
    const date = new Date(props.movie.release_date)

    return date.getFullYear()
  }

  return (
    <div className="movie-item">
      <div className="imageWrapper">
        <img
          src={"https://image.tmdb.org/t/p/w200" + props.movie.poster_path}
          alt={"Poster for movie " + props.movie.title}
          style={{ height: "calc(200 * 1.5)px" }}
          className="w-full h-full object-cover"
        />
      </div>

      <ScoreBar score={props.movie.vote_average} />

      <h1 className="mt-2 font-bold text-center">
        {props.movie.title} ({year()})
      </h1>
    </div>
  )
}

export default MovieItem
