import '../CSS/Form.css';
import React, { Component } from 'react';

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
        <label>Specific Excuse
          <input type='number' className='excuseId' />
        </label>
        <h2>OR</h2>
        <label>Number of Excuses needed:
          <input type='number' className='numOfExcusesInput'/>
        </label>
        <label>Category of Excuse:
          <input type='text' className='categoryInput'/>
        </label>
      </section>
    )
  }
}

export default Form;