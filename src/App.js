import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      chatText: [...Array(200)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let temp = this.state.chatText + event.target.value
    if (temp.length >= 200){
      temp = temp.substr(1);
      this.setState({chatText: temp});
    }
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <div className="chatBox">{this.state.chatText}</div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
