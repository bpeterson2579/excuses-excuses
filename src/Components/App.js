import '../CSS/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      excuses: []
    }
  }

  componentDidMount = () => {
    
  }

  render() {
    return(
      <>
        <h1>Hello World</h1>
        <img src={require('../assets/Excuses.png')} />
      </>
    )
  }
}

export default App;
