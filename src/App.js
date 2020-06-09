import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Movies from "./containers/Movies"
import Movie from "./containers/Movie"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Movies className="p-8" />
        </Route>

        <Route path="/movies/:id">
          <Movie />
        </Route>
      </Switch>
    </Layout>
  )
}

export default withRouter(App)
