import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = ({ name, assetImage }) => (

  <div className="column is-half-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/films/${name}`}>
      <div className="card">
        <div className="card-header film-header">
          <h1 className="card-header-title title is-4 has-text-black has-text-centered">{name}</h1>
        </div>
        <figure className="image">
          <img src={assetImage} alt={name} />
        </figure>
      </div>
    </Link>
  </div>

)

export default FilmCard