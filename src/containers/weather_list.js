import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}
function mapStateToProps({ weather }) {
  return { weather: weather };
}

export default connect(mapStateToProps)(WeatherList);
