import React from 'react'
import axios from 'axios'

import TimeCard from './TimeCard'

class TimeIndex extends React.Component {
  state = {
    times: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
      console.log(res.data)
      this.setState({ times: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <h1>Times</h1>
        <div>
          {this.state.times.map(time => <TimeCard key={time.timestamp} {...time} /> )}
        </div>
      </>
    )
  }
}

export default TimeIndex