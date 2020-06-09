import React, { useState, useEffect } from "react"
import MovieItem from "../MovieItem/MovieItem"

const MovieList = ({ movies, className, loadMore }) => {
  const [defaultClass, setClass] = useState("flex flex-wrap items-start")

  useEffect(() => {
    if (className) {
      setClass(className)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className={defaultClass}>
        {movies.map((movie) => (
          <MovieItem movie={movie} key={"movie-" + movie.id} />
        ))}
      </div>

      {loadMore && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="transition-colors duration-150 bg-red-700 py-3 px-4 text-white rounded shadow mx-auto hover:bg-red-600"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  )
}

export default MovieList
