import '../CSS/ExcuseDisplay.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategoryExcuse, fetchRandomNumOfCategoryExcuses, fetchRandomNumOfExcuses } from '../apiCalls/apiCalls';
import ExcuseCard from './ExcuseCard';

class ExcuseDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excuses: [],
      error: ''
    }
  }

  componentDidMount = () => {
    const numOfExcuses = window.location.pathname.split('/')[2].split('-')[0]
    const category = window.location.pathname.split('/')[2].split('-')[1]

    if(numOfExcuses > 0 && category !== 'none') {
      fetchRandomNumOfCategoryExcuses(category, numOfExcuses)
        .then(data => this.setState({excuses: data}))
        .catch(err => this.setState({error: err}))
    }else if(numOfExcuses > 0 && category === 'none') {
      fetchRandomNumOfExcuses(numOfExcuses)
        .then(data => this.setState({excuses: data}))
        .catch(err => this.setState({error: err}))
    }else if(category !== 'none' && !numOfExcuses) {
      fetchCategoryExcuse(category)
        .then(data => this.setState({excuses: data}))
        .catch(err => this.setState({error: err}))
    }
  }

  showExcuses = () => {
    return this.state.excuses.map((excuse, index) => {
      return(
        <ExcuseCard 
          excuses={excuse.excuse}
          category={excuse.category}
          id={excuse.id}
          key={excuse.id}
          index={index + 1}
          addToFavorites={this.props.addToFavorites} 
          removeFromFavorites={this.props.removeFromFavorites}
          favExcuses={this.props.favExcuses}
        />
      )
    })
  }

  showProperStar = () => {
    const excuseText = this.props.favExcuses.map(excuse => {
      return excuse.excuse
    })

    if(excuseText.includes()) {
      return <button className='fav-star' onClick={() => this.props.removeFromFavorites()}>★</button>
    }else {
      return <button className='not-fav-star' onClick={() => this.props.addToFavorites()}>✩</button>
    }
  }

  render() {
    return(
      <>
        {!this.state.excuses.length < 1 ? 
          <section className='excuse-container'>
            {this.showExcuses()}
          </section>
        : <p className='error'>You clearly don't need an excuse as you did not ask for any amount of them!</p>}
        <Link to='/form'>
          <button className='go-home'>Go Back</button>
        </Link>
      </>
    )
  }
}

export default ExcuseDisplay;