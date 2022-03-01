import '../CSS/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      excuses: []
    }
  }

  render() {
    return(
      <h1>Hello World</h1>
    )
  }
}

export default App;
