import React from "react"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="bg-red-700 px-8 py-6 text-white">
      <h1 className="font-bold text-lg">
        <Link to="/">MovieMiner</Link>
      </h1>
    </nav>
  )
}

export default Nav
