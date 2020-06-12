import React from "react"

function Footer() {
  return (
    <footer className="bg-red-700 px-8 py-6 text-white">
      <div className="flex items-center justify-center flex-col">
        <span className="font-medium text-sm mb-2">Data and movie posters kindly provided by</span>
        <img
          style={{ width: "70px" }}
          alt="The Movie Database Logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        ></img>
      </div>
    </footer>
  )
}

export default Footer
