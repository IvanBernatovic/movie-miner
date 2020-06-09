import React, { useState, useEffect } from "react"
import axios from "../utils/axios"
import MovieList from "../components/MovieList/MovieList"

const Movies = (props) => {
  const [data, setData] = useState({ movies: [], page: 0 })

  async function fetchMovies() {
    const response = await axios.get("/movie/popular", {
      params: {
        page: data.page + 1,
      },
    })

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
    <div className="p-6">
      <MovieList movies={data.movies} loadMore={fetchMovies} />
    </div>
  )
}

export default Movies
