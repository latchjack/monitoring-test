import React from 'react'
import axios from 'axios'

class FilmShow extends React.Component {
  state = {
    film: {}
  }

  async componentDidMount() {
    const filmName = this.props.match.params.name
    // console.log(filmId)

    const res = await axios.get('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/assets')

    // filter through the array of objects using find 
    const filmSelection = res.data.find(film => {
      // return the ojects which has the same name as the film selected
      return film.name === filmName
    })
    console.log(filmSelection)
    // set the individual films data into state
    this.setState({ film: filmSelection })
  }

  render() {
    // this deconstructs state here to save having to repeat myself
    const { name, skygoTotalViews, nowtvTotalViews, description, duration, videoImage, provider } = this.state.film
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop">
              <h1>{name}</h1>
              <h3>{provider}</h3>
              <img src={videoImage} alt={name} />
              <p>SkyGo views: {skygoTotalViews}</p>
              <p>NowTV views: {nowtvTotalViews}</p>
              <p>Total views: {parseInt(skygoTotalViews) + parseInt(nowtvTotalViews)}</p>
              <p>Duration: {duration}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FilmShow