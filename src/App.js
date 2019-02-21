import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="chatBox">{this.state.value}</div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
