import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{ name: 'linda' }, { name: 'Frank' }, { name: 'Jacky' }],
    };
  }
  render() {
    return (
      <div className='App'>
        <h1>
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.name}>{monster.name}</h1>;
          })}
        </h1>
      </div>
    );
  }
}
