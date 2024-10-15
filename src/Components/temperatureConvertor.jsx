import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cdegree: '',
      fdegree: '',
    };
  }

  handleCelsiusChange = (event) => {
    const cdegree = event.target.value;
    this.setState({
      cdegree: cdegree,
      fdegree: cdegree ? (cdegree * 9/5 + 32).toFixed(2) : '',
    });
  };

  handleFahrenheitChange = (event) => {
    const fdegree = event.target.value;
    this.setState({
      fdegree: fdegree,
      cdegree: fdegree ? ((fdegree - 32) * 5/9).toFixed(2) : '',
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Temperature Converter</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Celsius Degree"
              value={this.state.cdegree}
              onChange={this.handleCelsiusChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Fahrenheit Degree"
              value={this.state.fdegree}
              onChange={this.handleFahrenheitChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
