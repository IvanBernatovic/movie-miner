import React from "react"
import Nav from "./Nav"
import PropTypes from "prop-types"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
