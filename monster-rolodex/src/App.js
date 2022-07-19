import React, { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
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

export default App;
