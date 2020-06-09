import React from "react"
import DescriptionItem from "../../Shared/DescriptionItem"
import "./MovieDetails.css"

const MovieDetails = ({ movie }) => {
  const year = () => {
    const date = new Date(movie.release_date)

    return date.getFullYear()
  }

  const directors = () => {
    const directors = movie.credits.crew
      .filter((crewMember) => {
        return crewMember.job === "Director"
      })
      .map((crewMember) => crewMember.name)

    return directors
  }
  const formatMoney = (amount) => {
    if (amount) {
      const formattedAmount = new Intl.NumberFormat().format(amount)

      return `$${formattedAmount}`
    }

    return "Unknown"
  }

  return (
    <div className="movie-details-wrapper">
      <div className="mb-6">
        <img
          src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
          alt={"Poster for movie " + movie.title}
          className="shadow-xl lg:w-4/5 xl:w-3/5 m-auto rounded-lg"
        />
      </div>

      <h1 className="font-bold text-xl mb-2">
        {movie.title} ({year()})
      </h1>

      <div className="movie-details">
        <dl>
          <DescriptionItem
            label="Genres"
            text={movie.genres.map((genre) => genre.name).join(", ")}
          />
          <DescriptionItem label="Release date" text={movie.release_date} />
          <DescriptionItem label="Director" text={directors().join(", ")} />
          <DescriptionItem label="Length" text={movie.runtime + " mins"} />
          <DescriptionItem label="Budget" text={formatMoney(movie.budget)} />
          <DescriptionItem label="Revenue" text={formatMoney(movie.revenue)} />
          <DescriptionItem
            label="Languages"
            text={movie.spoken_languages.map((language) => language.name).join(", ")}
          />
          <DescriptionItem
            label="Production Companies"
            text={movie.production_companies.map((company) => company.name).join(", ")}
          />
        </dl>
      </div>
    </div>
  )
}

export default MovieDetails
