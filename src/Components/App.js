import '../CSS/App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Form from './Form';
import Favorites from './Favorites';
import ExcuseDisplay from './ExcuseDisplay';
import Error from './Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favExcuses: [
        {
          "id": 406,
          "excuse": "My team just had our work schedules change, and I'm set to go in at 6 AM tomorrow.",
          "category": "party"
        }
      ]
    }
  }

  addToFavorites = (newFav) => {
    this.setState({favExcuses: [...this.state.favExcuses, newFav]})
  }

  removeFromFavorites = (id) => {
    const filteredFavorites = this.state.favExcuses.filter(excuse => {
      return excuse.id !== id;
    })

    this.setState({ favExcuses: filteredFavorites})
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
          <Route path='/excuses/:excuseAmount-:category' element={<ExcuseDisplay favExcuses={this.state.favExcuses} addToFavorites={this.addToFavorites} removeFromFavorites={this.removeFromFavorites}/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    )
  }
}

export default App;
