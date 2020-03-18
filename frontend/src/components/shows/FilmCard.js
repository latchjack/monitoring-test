import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = ({ name, assetImage }) => (

  <div className="column is-half-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/shows/${name}`}>
      <div className="card">
        
        <h1 className="filmtitle">{name}</h1>
        <img src={assetImage} alt={name} />

      </div>
    </Link>
  </div>

)

export default FilmCard