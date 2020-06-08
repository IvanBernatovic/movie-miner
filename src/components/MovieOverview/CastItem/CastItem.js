import React from "react"
import "./CastItem.css"

const CastItem = ({ castMember }) => {
  const profilePath = () => {
    return castMember.profile_path
      ? "https://image.tmdb.org/t/p/w185" + castMember.profile_path
      : "https://finanzmesse.ch/userdata/uploads/referenten/avatar.jpg"
  }

  return (
    <div className="mr-6 mb-2 flex-grow cast-item">
      <img src={profilePath()} alt={"Picture of " + castMember.name} />

      <span className="text-sm text-gray-700 text-center inline-block font-lato">
        {castMember.name}
      </span>
    </div>
  )
}

export default CastItem
