import React, { useState } from "react"
import Icon from "../../../components/Icon"

const MovieRating = ({ movie, rating, onClick }) => {
  const [hoverRating, setHoverRating] = useState(null)

  const scores = (length = 10, start = 1) => {
    return Array.from({ length }, (_, i) => start + i)
  }

  const handleMouseEnter = (index) => {
    setHoverRating(index)
  }

  const handleMouseLeave = (event) => {
    setHoverRating(null)
  }

  const handleOnClick = (score) => {
    onClick(score)
  }

  const iconType = (index) => {
    if (hoverRating) {
      return hoverRating >= index ? "solid-star" : "star"
    }

    if (rating) {
      return rating >= index ? "solid-star" : "star"
    }

    return "star"
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Ratings</h2>

      <div className="flex mb-4">
        {scores().map((star, index) => (
          <div id="star-rating" className="w-8 cursor-pointer" key={"star-" + index}>
            <Icon
              type={iconType(index + 1)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleOnClick}
              index={index + 1}
            />
          </div>
        ))}
      </div>

      <div className="flex">
        <div>
          <span className="text-3xl font-bold">{movie.vote_average}</span>{" "}
          <span className="text-xs text-gray-700 font-light"> / 10</span>
          <p className="text-sm text-gray-600">Votes: {movie.vote_count}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieRating
