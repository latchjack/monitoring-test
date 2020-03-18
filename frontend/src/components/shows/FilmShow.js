import React from 'react'
import axios from 'axios'

class FilmShow extends React.Component {
  state = {
    film: []
  }

  async componentDidMount() {
    const res = await axios.get('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/assets')
    console.log(res)
  }

  render() {
    console.log('here')
    const { name, skygoTotalViews, nowtvTotalViews, description, duration, videoImage, provider } = this.state.film
    return (
      <>
        <h1>{name}</h1>
        <h3>{provider}</h3>
        <img src={videoImage} alt={name} />
        <p>{skygoTotalViews} - {nowtvTotalViews} - {duration}</p>
        <p>{description}</p>
      </>
    )
  }
}

export default FilmShow