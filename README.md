# monitoring-test

## Tech Stack
+ HTML5
+ SCSS & Bulma
+ JavaScript (ES6)
+ React
  + React-Router-Dom
+ Axios
+ Recharts
+ Git & GitHub

## Release History
+ 2.0 - Improved code on all components. Fixed all the errors. Fixed Show page for the individual films. Added linechart using timeseries data on the Time page. Added styling to match company colours and website styling. 
+ 1.0 - ~~This was built within the 4 hour limit, any improvements I've planned to implement will be done in a new repository.~~

## Getting Started
If you would like to start this project please fork and in the Terminal, CD into the `frontend` directory. Once there, `yarn` to install dependencies. Then `yarn start` to get the project running. You can then navigate to `http://localhost:3000` to view the project.

# TODO LIST

1. ~~get individual pages working~~
2. ~~combine total views to one number~~
3. ~~get timestamps to show up~~
4. ~~convert timestamps into charts~~
5. ~~convert duration into minutes~~
6. ~~styling~~
7. ~~comment code~~
8. rank titles based on view


## Challenges and Improvements

### Challenges
The main challenges I had on this project were...
1. ~~Getting the individual films to display. I managed to get the index page up and running fairly quickly, but found it quite tricky to route to another *page* which would display just a single film.~~ ✅
2. Getting the charts to show the data using Recharts. ✅
  * I've never used Rechart before so it was a little challenge learning how to use it. I found it tricky as I was attempting to map through the array producing 10 charts for each index of the array, until I realised that each index in the array was actually meant to be a marker on a linechart. In the end I got it to work using the code below and going back over the documentation a couple of times.
  ```js
  render() {
    const { dataList, timestamp, value } = this.state.dataList
    return (
      <section className="section">
        <div className="container">
            <h1>Timeseries Linechart</h1>
            <div key={this.state.dataList.timestamp} {...dataList} className="columns is-mobile is-multiline chartDiv">
              <LineChart width={1200} height={600} data={this.state.dataList} margin={{ top: 30, right: 30, left: 40, bottom: 30 }}>
                <Line type="monotone" dataKey="timestamp" stroke="#8884d8" />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <YAxis dataKey="value" />
                <XAxis dataKey="timestamp" />
                <Tooltip />
                <Legend />
              </LineChart>
            </div>
        </div>
      </section>
    )
  }
  ```
3. Converting the Unix Timestamps into the regular date format e.g. `1458003600` is converted into `03/15/2016 @ 1:00am (UTC)`. I attempted to convert is using Moment.js on the X Axis legend but I couldn't get it to work without breaking the page. I tried the following attempts below

```js
  <XAxis {moment.unix(parseInt(dataKey="timestamp"))} id="xAxis"/>
```

and

```js
  <XAxis dataKey={moment.unix(parseInt("timestamp"))} id="xAxis"/>
```

However neither seemed to yield the right result.
4. Sorting the films in ranking order of views.
  + I wanted to attempt using the sorting algorithm I had learned about in class and thought I would try the code below. I think I was heading in the right direction but wasn't sure how to implement it into React.
```js
  const sortedFilms = this.state.data.map(film => ({ ...film }))
  sortedFilms.sort((film1, film2) => {
    const totalViews = this.state.data.skygoTotalViews + this.state.data.nowtvTotalViews
    
    const film1Views = film1.totalViews
    const film2Views = film2.totalViews

    if (film1Views === film2Views ) return 0
    if (film1Views < film2Views) return -1
    if (film1Views > film2Views) return 1
  })
```

### Improvements
The improvements I would like to make on this game would be the following...
1. ~~Getting the individual pages working.~~ Done ✅
2. ~~Use Rechart on the timeseries data to create a linechart.~~ ✅
3. Converting the unix timestamps into the common date format using [Moment.js](https://momentjs.com/).
4. Rank the titles using the amount of total viewings they've had.

## Wins
I really enjoyed this challenge and found I learnt a lot by doing it. I'm glad I put some more time into it as I think the styling was implemented well and as close to the company's website as possible. I think I did well with the show page data in the end too. I'm also very happy as I taught myself how to use Rechart to create the linechart. This is something I've never done before but can see myself using on other projects in the future.

#### Author
Latch Jack - You can contact me via [Twitter](https://twitter.com/LatchCodes "My twitter profile") or via [email](mailto:latch.jack@gmail.com "my email").

Thank you for reading my repository! :)