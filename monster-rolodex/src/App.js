import React, { useState, useEffect, Component } from 'react';

import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState();
  const [searchField, setSearchField] = useState();

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
