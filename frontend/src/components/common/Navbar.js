import React from 'react'
import { Link } from 'react-router-dom'
import SkyLogo from '../../../src/assets/sk.png'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-white">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item has-text-white title" to="/">
              <div>
                <img src={SkyLogo} alt="Sky logo" />
              </div>
            </Link>
          </div>
            <div className="navbar-end">
              <Link className="navbar-item my-nav-items title is-4" to="/films">Films</Link>
              <Link className="navbar-item my-nav-items title is-4" to="/times">Times</Link>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar