import React from "react"
import MovieDetails from "./MovieDetails/MovieDetails"
import CastList from "./CastList/CastList"
import MovieRating from "./MovieRating/MovieRating"

const MovieOverview = ({ movie }) => {
  return (
    Object.keys(movie).length !== 0 && (
      <div className="">
        <div className="md:flex">
          <MovieDetails movie={movie} />

          <div className="p-6">
            <MovieRating movie={movie} />
            <div className="mb-6">
              <h2 className="text-lg font-semibold">The plot</h2>
              <p className="font-lato">{movie.overview}</p>
            </div>
            <CastList cast={movie.credits.cast} />
          </div>
        </div>

        <div className="recommendations">
          <h1 className="font-bold text-xl">Recommendations</h1>
        </div>
      </div>
    )
  )
}

export default MovieOverview
