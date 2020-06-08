import React, { useEffect, useState } from "react"
import axios from "../../../utils/axios"
import Icon from "../../../components/Icon"
import getTmdbGuestSessionToken from "../../../tmdb-session"

const MovieRating = ({ movie }) => {
  const [yourRating, setRating] = useState(null)
  const [hoverRating, setHoverRating] = useState(null)

  useEffect(() => {
    async function fetchRatedMovies() {
      const guestSession = getTmdbGuestSessionToken()

      const response = await axios.get(`/guest_session/${guestSession}/rated/movies`, {
        params: {
          session_id: localStorage.getItem("tmdbGuestSession.token"),
          api_key: process.env.TMDB_API_KEY,
        },
      })

      return response
    }

    fetchRatedMovies().then((response) => {
      const ratedMovie = response.data.results.find((_movie) => _movie.id === movie.id)
      console.log(response, ratedMovie)
      if (ratedMovie) {
        setRating(ratedMovie.rating)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scores = (length = 10, start = 1) => {
    return Array.from({ length }, (_, i) => start + i)
  }

  const handleMouseEnter = (index) => {
    setHoverRating(index)
  }

  const handleMouseLeave = (event) => {
    setHoverRating(null)
  }

  const iconType = (index) => {
    if (hoverRating) {
      return hoverRating >= index ? "solid-star" : "star"
    }

    if (yourRating) {
      return yourRating >= index ? "solid-star" : "star"
    }

    return "star"
  }

  const rateMovie = (index) => {
    axios
      .post(
        `/movie/${movie.id}/rating`,
        {
          value: index,
        },
        {
          params: {
            guest_session_id: getTmdbGuestSessionToken(),
          },
        }
      )
      .then(() => {
        setRating(index)
      })
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Ratings</h2>

      <div className="flex mb-4">
        {scores().map((star, index) => (
          <div id="star-rating" className="w-8 mr-2" key={"star-" + index}>
            <Icon
              type={iconType(index + 1)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={rateMovie}
              index={index + 1}
            />
          </div>
        ))}
      </div>

      <p>Score: {movie.vote_average}/10</p>
      <p>{movie.vote_count} ratings</p>
    </div>
  )
}

export default MovieRating
