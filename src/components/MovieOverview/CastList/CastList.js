import React, { useState } from "react"
import CastItem from "../CastItem/CastItem"
import "./CastList.css"

const CastList = ({ cast }) => {
  const [display, setDisplay] = useState(12)

  const displayMore = () => {
    setDisplay(display + 12)
  }

  return (
    <div className="cast-list-wrapper">
      <h3 className="font-semibold text-lg mb-2">Cast</h3>
      <div className="cast-list">
        {cast.slice(0, display).map((castMember) => {
          return <CastItem castMember={castMember} key={"cast-" + castMember.cast_id} />
        })}
      </div>

      <div className="text-center">
        <button onClick={displayMore} className="px-3 py-2 bg-red-700 text-white rounded">
          Show more
        </button>
      </div>
    </div>
  )
}

export default CastList
