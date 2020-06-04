import React from "react"
import "./MovieItem.css"

const MovieItem = (props) => {
  return (
    <div className="movie-item">
      <div className="imageWrapper">
        <div className="h-full">
          <img
            src={"https://image.tmdb.org/t/p/w200" + props.movie.poster_path}
            alt={"Poster for movie " + props.movie.tile}
            className="w-full h-full"
          />
        </div>
      </div>

      <h1 className="mt-2 font-bold text-center">{props.movie.title}</h1>
    </div>
  )
}

export default MovieItem
