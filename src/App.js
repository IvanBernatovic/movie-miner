import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./components/Layout"
import MovieList from "./containers/MovieList"
import Movie from "./containers/Movie"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MovieList className="p-8" />
        </Route>

        <Route path="/movies/:id">
          <Movie />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
