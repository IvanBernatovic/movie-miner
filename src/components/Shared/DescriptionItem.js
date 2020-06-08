import React from "react"

const DescriptionItem = ({ label, text }) => {
  return (
    <div className="mb-5">
      <dt className="font-light text-sm">{label}</dt>
      <dd className="font-semibold text-gray-800">{text}</dd>
    </div>
  )
}

export default DescriptionItem
