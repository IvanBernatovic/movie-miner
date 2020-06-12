import React, { useState } from "react"
import Modal from "../components/Shared/Modal/Modal"
import axios from "../utils/axios"
import MovieItem from "../components/MovieItem/MovieItem"

const MovieRoulette = ({ genres, fetchGenres }) => {
  const [data, setData] = useState({
    showModal: false,
    selectedGenre: 28,
    randomMovie: {},
  })

  const toggleModal = (show = !data.showModal) => {
    setData((prevData) => {
      return {
        ...prevData,
        showModal: show,
      }
    })
  }

  const handleOpenModal = async () => {
    await fetchGenres()

    toggleModal()
  }

  const handleCloseModal = () => {
    toggleModal()
  }

  const setGenre = (e) => {
    const { value } = e.target

    setData((prevState) => {
      return {
        ...prevState,
        selectedGenre: parseInt(value),
      }
    })
  }

  const getRandomMovie = async () => {
    const response = await axios.get("/discover/movie", {
      params: {
        with_genres: data.selectedGenre,
        page: Math.floor(Math.random() * 50) + 1,
      },
    })

    const randomInt = Math.floor(Math.random() * response.data.results.length)

    setData((prevData) => {
      return {
        ...prevData,
        randomMovie: response.data.results[randomInt],
      }
    })
  }

  return (
    <div>
      <Modal show={data.showModal} onClose={handleCloseModal} modalTitle="Movie Roulette">
        <div>
          <div className="md:flex">
            <div className="mr-3 flex-grow" style={{ minWidth: "160px" }}>
              {genres.map((genre) => {
                return (
                  <label
                    className="block mb-1 font-medium"
                    key={genre.id}
                    htmlFor={"genre-" + genre.id}
                  >
                    <input
                      type="radio"
                      name="genre"
                      id={"genre-" + genre.id}
                      onChange={setGenre}
                      checked={data.selectedGenre === genre.id}
                      value={genre.id}
                      className="mr-2"
                    />{" "}
                    {genre.name}
                  </label>
                )
              })}
            </div>

            {Object.keys(data.randomMovie).length !== 0 && (
              <div className="py-6">
                <div className="flex items-center justify-center">
                  <MovieItem movie={data.randomMovie} />
                </div>

                <p className="mt-4 text-justify">{data.randomMovie.overview}</p>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-center">
            <button onClick={getRandomMovie} className="w-20 btn btn-brand">
              Roll
            </button>
          </div>
        </div>
      </Modal>

      <div className="shuffle-button shadow-lg" onClick={handleOpenModal}>
        <svg
          className="w-1/3"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#ffe1e1"
            d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default MovieRoulette
