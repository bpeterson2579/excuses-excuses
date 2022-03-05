import '../CSS/Form.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      specificId: 0,
      excuseAmount: 0,
      category: '',
    }
  }

  render() {
    return(
      <section className='form'>
        <div className='excuse-field'>
          <label>Specific Excuse ID:
            <input type='number' className='excuse-input' />
          </label>
          <button className='submit-button'>Submit</button>
        </div>
        <h2>OR</h2>
        <div className='excuse-field'>
          <label>Number of Excuses needed:
            <input type='number' min='1' max='10' className='excuse-input'/>
          </label>
          <label>Category of Excuse:
            <select className='category-input'>
              <option value='family'>Family</option>
              <option value='office'>Office</option>
              <option value='children'>Children</option>
              <option value='college'>College</option>
              <option value='party'>Party</option>
            </select>
          </label>
          <button className='submit-button'>Submit</button>
        </div>
        <Link to='/'>
          <button className='go-home'>Go Home</button>
        </Link>
      </section>
    )
  }
}

export default Form;