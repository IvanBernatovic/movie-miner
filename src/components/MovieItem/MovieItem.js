import React from "react"
import { Link } from "react-router-dom"
import "./MovieItem.css"

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

      {/* <ScoreBar score={props.movie.vote_average} /> */}

      <div
        className="relative text-sm font-semibold text-gray-300 py-1 px-2 bg-gray-900 rounded-full text-white flex items-center justify-center"
        style={{ bottom: "22px", left: "45px", width: "2.4em", height: "2.4em" }}
      >
        <span>{props.movie.vote_average}</span>
      </div>

      <h1 className="font-medium text-center text-sm relative" style={{ bottom: "15px" }}>
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
