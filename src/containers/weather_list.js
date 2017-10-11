import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp)
    console.log(temps);

    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //  { weather } === { weather: weather }
}

//the bottom is the same as above. Above is ES6
//function mapStateToProps(state) {
//  return { weather: state.weather };
//}

export default connect(mapStateToProps)(WeatherList);
