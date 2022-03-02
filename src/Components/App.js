import '../CSS/App.css';
import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      excuses: []
    }
  }

  render() {
    return(
      <main>
        <img className='background' src={require('../assets/Excuses.png')} />
        <h1>Excuses, Excuses</h1>
        <Form />
      </main>
    )
  }
}

export default App;
