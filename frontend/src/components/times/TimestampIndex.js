import React from 'react'
import axios from 'axios'

import TimestampCard from './TimestampCard'

class TimestampIndex extends React.Component {
  state = {
    times: []
  }

  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
  //     console.log(res.data)
  //     this.setState({ times: res.data })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    return (
      <>
        <h1>Times</h1>
      </>
    )
  }
}

export default TimestampIndex