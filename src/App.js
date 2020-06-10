import React, { Suspense, lazy } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import Layout from "./components/Layout"

const Movies = lazy(() => import("./containers/Movies"))
const Movie = lazy(() => import("./containers/Movie"))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="text-3xl">Loading</div>}>
        <Switch>
          <Route path="/" exact>
            <Movies className="p-8" />
          </Route>

          <Route path="/movies/:id">
            <Movie />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default withRouter(App)
