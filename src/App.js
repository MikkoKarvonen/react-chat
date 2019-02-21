import React, { Component } from 'react';
import Chat from './components/Chat.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      chatText: [...Array(100)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let charToAdd = event.target.value;
    if (charToAdd === ' ') charToAdd = '_';
    let temp = this.state.chatText + charToAdd.toLowerCase();
    if (temp.length >= 100){
      temp = temp.substr(1);
      this.setState({chatText: temp});
    }
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <header>
          <h1>react-chat</h1>
        </header>
        <div className="chat">
          <Chat text={this.state.chatText}/>
          <div className="chatInput">
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
