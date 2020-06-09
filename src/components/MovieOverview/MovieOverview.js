import React from "react"
import MovieDetails from "./MovieDetails/MovieDetails"
import CastList from "./CastList/CastList"
import MovieRating from "./MovieRating/MovieRating"
import MovieList from "../MovieList/MovieList"

const MovieOverview = ({ movie, rating, movieRated }) => {
  return (
    Object.keys(movie).length !== 0 && (
      <div className="">
        <div className="xl:flex">
          <div className="md:flex">
            <MovieDetails movie={movie} />

            <div className="p-6">
              <MovieRating movie={movie} rating={rating} onClick={movieRated} />
              <div className="mb-6">
                <h2 className="text-lg font-semibold">The plot</h2>
                <p className="font-lato">{movie.overview}</p>
              </div>

              <CastList cast={movie.credits.cast} />

              <div className="mt-4">
                <h2 className="text-lg font-semibold">Reviews</h2>
                <div className="mb-6 md:flex flex-wrap">
                  {movie.reviews.results.splice(0, 2).map((review) => (
                    <div key={"review-" + review.id} className="mb-5 md:w-1/2 pr-4">
                      <h3 className="font-semibold">{review.author}</h3>
                      <p className="font-lato whitespace-pre-wrap ">{review.content}</p>
                    </div>
                  ))}

                  {movie.reviews.results.length === 0 && (
                    <p>There are no user reviews for this movie</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="recommendations p-6 bg-white">
            <h1 className="font-bold text-xl mb-4 text-center">Recommendations</h1>

            <MovieList
              movies={movie.recommendations.results}
              className="flex flex-wrap items-start xl:flex-col xl:justiy-center xl:items-center"
            />
          </div>
        </div>
      </div>
    )
  )
}

export default MovieOverview
