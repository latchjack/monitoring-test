import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar is-black">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item has-text-white title" to="/">
              <div className="logo">
                {/* <img className="skylogo" src="" alt="sky logo" /> */}
                <p>Sky</p>
              </div>
            </Link>
          </div>
            <div className="navbar-end">
              <Link className="navbar-item has-text-white title is-4" to="/films">Films</Link>
              <Link className="navbar-item has-text-white title is-4" to="/times">Times</Link>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar