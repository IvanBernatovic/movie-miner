import React, { useState, useEffect } from "react"
import axios from "../utils/axios"
import MovieItem from "../components/MovieItem/MovieItem"

const MovieList = (props) => {
  const [data, setData] = useState({ movies: [], page: 0 })

  async function fetchMovies() {
    const response = await axios.get("/movie/popular", {
      params: {
        page: data.page + 1,
      },
    })

    console.log(response)

    setData((prevState) => {
      return {
        ...data,
        ...{
          movies: prevState.movies.concat(response.data.results),
          page: response.data.page,
        },
      }
    })
  }

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="text-center">
      <div className={"flex flex-wrap " + props.className}>
        {data.movies.map((movie) => (
          <MovieItem movie={movie} key={"movie-" + movie.id} />
        ))}
      </div>

      <button
        onClick={fetchMovies}
        className="transition-colors duration-150 bg-red-700 py-3 px-4 text-white rounded shadow mx-auto hover:bg-red-600"
      >
        Load more
      </button>
    </div>
  )
}

export default MovieList
