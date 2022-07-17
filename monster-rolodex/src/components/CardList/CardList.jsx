import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends Component {
  render() {
    return (
      <div className='card-list'>
        {this.props.monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}

export default CardList;
