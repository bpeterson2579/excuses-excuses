import '../CSS/Form.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExcuseDisplay from './ExcuseDisplay';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      excuseAmount: 0,
      category: '',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {    
    return(
      <section className='form'>
        <Link to='/'>
          <button className='go-home'>Go Home</button>
        </Link>
        <section className='excuse-field'>
          <label>Number of Excuses needed:
            <input type='number' min='1' max='10' name='excuseAmount' className='excuse-input' value={this.state.excuseAmount} onChange={event => this.handleChange(event)} required='required'/>
          </label>
          <label>Category of Excuse:
            <select className='category-input' name='category' value={this.state.category} onChange={event => this.handleChange(event)} required='required'>
              <option value='none'></option>
              <option value='none'>None</option>
              <option value='family'>Family</option>
              <option value='office'>Office</option>
              <option value='children'>Children</option>
              <option value='college'>College</option>
              <option value='party'>Party</option>
            </select>
          </label>
          {this.state.category ?
            <Link to={`/excuses/${this.state.excuseAmount}-${this.state.category}`}>
              <button className='submit-button'>Submit</button>
            </Link>
          : <button className='disabled-button' disabled>Submit</button>}
        </section>
      </section>
    )
  }
}

export default Form;