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

+ 1.0 - This was built within the 4 hour limit, any improvements I've planned to implement will be done in a new repository.

## Getting Started
If you would like to start this project please fork and in the Terminal, CD into the `frontend` directory. Once there, `yarn` to install dependencies. Then `yarn start` to get the project running. You can then navigate to `http://localhost:3000` to view the project.

## Challenges and Improvements

### Challenges
The main challenges I had on this project were...
1. ~~Getting the individual films to display. I managed to get the index page up and running fairly quickly, but found it quite tricky to route to another *page* which would display just a single film.~~
  * Solution - goes here.. include screenshot I took
  ![Error I recieved]( "example code")
2. Getting the charts to show the data using Recharts.
  * I found it tricky as ...
  ```js
    render() {
    return (
      <section className="section">
        <div className="container">
          {this.state.dataList.map(individualData =>
            <div key={individualData.timestamp} {...individualData} className="columns is-mobile is-multiline">
              <LineChart width={600} height={300} data={this.state.dataList}>
                <Line type="monotone" dataKey="individualData.timestamp" stroke="#8884d8" />
                <Line type="monotone" dataKey="individualData.value" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="value" />
                <YAxis dataKey="timestamp" />
              </LineChart>
            </div>
          )}
        </div>
      </section>
    )
  }
  ```
3. 

}

### Improvements
The improvements I would like to make on this game would be the following...
1. Getting the individual pages working.
2. Converting the unix timestamps into a date format using [Moment.js](https://momentjs.com/).
3. Rank the titles using the amount of total viewings they've had.

Overall I found this really fun but found I needed a some more time to add more functionality. I would definitely like to have another attempt of this without the 4 hour limit.

#### Author
Latch Jack - You can contact me via [Twitter](https://twitter.com/LatchCodes "My twitter profile") or via [email](mailto:latch.jack@gmail.com "my email").

Thank you for reading my repository! :)