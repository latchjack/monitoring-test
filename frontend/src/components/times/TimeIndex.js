import React from 'react'
import axios from 'axios'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

class TimeIndex extends React.Component {
  state = {
    dataList: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
      console.log(res.data)
      this.setState({ dataList: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { dataList } = this.state.dataList
    return (
      <section className="section">
        <div className="container chartContainer">
            <h1 className="title is-2 has-text-centered">Timeseries Linechart</h1>
            <div key={this.state.dataList.timestamp} {...dataList} className="columns is-mobile is-multiline chartDiv">
              <LineChart width={1200} height={600} data={this.state.dataList} margin={{ top: 30, right: 30, left: 40, bottom: 30 }}>
                <Line type="monotone" dataKey="timestamp" stroke="#8884d8" />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <YAxis dataKey="value" />
                <XAxis dataKey={parseInt("timestamp")} id="xAxis"/>
                <Tooltip />
                <Legend />
              </LineChart>
            </div>
        </div>
      </section>
    )
  }
}

export default TimeIndex