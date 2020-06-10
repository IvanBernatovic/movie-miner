import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieOverview from "../components/MovieOverview/MovieOverview"
import axios from "../utils/axios"
import getTmdbGuestSessionToken from "../tmdb-session"

const Movie = () => {
  let { id } = useParams()
  const [movie, setMovie] = useState({})
  const [rating, setRating] = useState([])

  useEffect(() => {
    const yourRating = (_ratings, movie) => {
      const ratedMovie = _ratings.find((_movie) => _movie.id === movie.id)
      if (ratedMovie) {
        return ratedMovie.rating
      }

      return null
    }

    function fetchMovie() {
      const guestSession = getTmdbGuestSessionToken()

      Promise.all([
        axios.get("/movie/" + id, {
          params: {
            append_to_response: "credits,recommendations,reviews",
          },
        }),
        axios.get(`/guest_session/${guestSession}/rated/movies`, {
          params: {
            session_id: localStorage.getItem("tmdbGuestSession.token"),
          },
        }),
      ]).then(([movieRes, ratingsRes]) => {
        setMovie(movieRes.data)
        setRating(yourRating(ratingsRes.data.results, movieRes.data))
      })
    }

    fetchMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rateMovie = (score) => {
    axios
      .post(
        `/movie/${movie.id}/rating`,
        { value: score },
        {
          params: {
            guest_session_id: getTmdbGuestSessionToken(),
          },
        }
      )
      .then(() => {
        setRating(score)
        localStorage.removeItem("tmdbGuestSession.expiresAt")
      })
      .catch(() => {
        setRating(null)
      })
  }

  return <MovieOverview movie={movie} rating={rating} movieRated={rateMovie} />
}

export default Movie
