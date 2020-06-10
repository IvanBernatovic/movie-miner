import React, { useState, useEffect } from "react"
import axios from "../utils/axios"
import MovieList from "../components/MovieList/MovieList"
import MovieRoulette from "./MovieRoulette"

const Movies = (props) => {
  const [data, setData] = useState({
    movies: [],
    page: 0,
    genres: [],
  })

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

  const fetchGenres = async () => {
    const response = await axios.get("/genre/movie/list")

    setData((prevState) => {
      return {
        ...prevState,
        genres: response.data.genres,
      }
    })
  }

  return (
    <div className="p-6">
      <MovieList movies={data.movies} loadMore={fetchMovies} />

      <MovieRoulette genres={data.genres} fetchGenres={fetchGenres} />
    </div>
  )
}

export default Movies
