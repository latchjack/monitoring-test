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
          {/* left-column */}
          <div className="columns">
            <div className="column">
              <h1 className="title is-1 has-text-black has-text-centered filmHeadings">{name}</h1>
              <img src={videoImage} alt={name} className="showImage" />
            </div>
            {/* right-column */}
            <div className="column filmInfo">
              <h3 className="title is-4 has-text-black has-text-centered">{provider}</h3>
              <hr />
              <p className="viewStats"><span className="title is-5">SkyGo views</span>: {skygoTotalViews}</p>
              <p className="viewStats"><span className="title is-5">NowTV views</span>: {nowtvTotalViews}</p>
              <p className="viewStats"><span className="title is-5">Total views</span>: {parseInt(skygoTotalViews) + parseInt(nowtvTotalViews)}</p>
              <p className="viewStats"><span className="title is-5">Duration</span>: {parseInt(duration / 60)} minutes</p>
              <hr />
              <p className="filmDesc has-text-centered">{description}</p>
              <hr />
            <div className="trailerDiv">
              <a className="trailerLink" 
                rel="noopener noreferrer" 
                target="_blank" 
                href={`https://www.youtube.com/results?search_query=${this.state.film.name}+trailer`}>
                  Watch the trailer for {this.state.film.name}
              </a>
            </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default FilmShow