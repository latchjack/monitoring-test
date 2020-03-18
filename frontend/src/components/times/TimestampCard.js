import React from 'react'
import { Link } from 'react-router-dom'

const TimestampCard = ({ timestamp, value }) => (

  <div className="column is-half-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/times/${time}`}>
      <div className="card">
        
        <h2>{timestamp}</h2>
        <h2>{value}</h2>

      </div>
    </Link>
  </div>

)

export default TimestampCard