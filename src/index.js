import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./css/tailwind.css"
import "./css/app.css"

const app = <App />

ReactDOM.render(app, document.getElementById("root"))

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").then((registration) => {})
    })
  }
}
