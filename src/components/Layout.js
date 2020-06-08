import React from "react"
import Nav from "./Nav"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
