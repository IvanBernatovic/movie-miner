import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./css/tailwind.css"
import "./css/app.css"

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById("root"))
