import React from "react"
import "./ScoreBar.css"

const ScoreBar = ({ score }) => {
  const scoreBar = (length = 10, start = 1) => {
    return Array.from({ length }, (_, i) => start + i)
  }

  const scoreFillPercentage = () => {
    const scoreFill = parseFloat(score * 10) + "%"

    return scoreFill
  }

  const scoreFillColor = () => {
    if (score < 4) {
      return "text-red-600 bg-red-600"
    } else if (score >= 4 && score < 7.2) {
      return "text-yellow-600 bg-yellow-600"
    } else {
      return "text-green-600 bg-green-600"
    }
  }

  return (
    <div className="relative w-full">
      <div className="score-bar">
        {scoreBar().map((bar) => (
          <span key={"bar-" + bar} className="bar" />
        ))}
      </div>

      <div
        className={"score-bar-fill " + scoreFillColor()}
        style={{
          width: scoreFillPercentage(),
        }}
      ></div>
    </div>
  )
}

export default ScoreBar
