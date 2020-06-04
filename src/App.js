import React from "react"
import Layout from "./components/Layout"
import MovieList from "./containers/MovieList"

function App() {
  return (
    <div>
      <Layout>
        <MovieList className="p-8" />
      </Layout>
    </div>
  )
}

export default App
