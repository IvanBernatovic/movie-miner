import React from "react"
import { Link } from "react-router-dom"
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
          className="w-full h-full object-cover rounded-lg shadow"
        />
      </div>

      <ScoreBar score={props.movie.vote_average} />

      <h1 className="mt-2 font-bold text-center">
        <Link
          to={"/movies/" + props.movie.id}
          className="transition-colors duration-150 hover:text-blue-500"
        >
          {props.movie.title} ({year()})
        </Link>
      </h1>
    </div>
  )
}

export default MovieItem
