import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = ({ name, assetImage, provider }) => (

  <div className="column is-half-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/films/${name}`}>
      <div className="card">
        <div className="card-header film-header">
          <h1 className="card-header-title title is-4 has-text-black">{name}</h1>
        </div>
        <figure className="image">
          <img src={assetImage} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h5 className="title is-4 has-text-black">Now showing on {provider}</h5>
      </div>
    </Link>
  </div>

)

export default FilmCard