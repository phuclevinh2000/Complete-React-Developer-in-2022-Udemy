import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <div key={id} className='card-container'>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2?size=180*180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
