import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Phuc', lastName: 'Le' },
      company: 'ZTM',
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{' '}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: 'Tram', lastName: 'Nguyen' },
              });
            }}
          >
            Chnage name
          </button>
        </header>
      </div>
    );
  }
}
