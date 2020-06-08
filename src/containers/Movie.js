import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieOverview from "../components/MovieOverview/MovieOverview"
import axios from "../utils/axios"

const Movie = () => {
  let { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get("/movie/" + id, {
        params: {
          append_to_response: "credits,recommendations",
        },
      })

      setMovie((prevState) => {
        return response.data
      })
    }

    fetchMovie()
  }, [id])

  return <MovieOverview movie={movie} />
}

export default Movie
