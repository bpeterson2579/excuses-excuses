import '../CSS/App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Form from './Form';
import Favorites from './Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favExcuses: []
    }
  }

  render() {
    return(
      <main>
        <img className='background' src={require('../assets/Excuses.png')} />
        <h1>Excuses, Excuses</h1>
        <Routes>
          <Route exact path='/' element={<Nav />} />
          <Route path='/form' element={<Form />} />
          <Route path='/favorites' element={<Favorites favExcuses={this.state.favExcuses}/>} />
        </Routes>
      </main>
    )
  }
}

export default App;
