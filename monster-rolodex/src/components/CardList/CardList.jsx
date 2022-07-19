import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card name={name} email={email} id={id} key={id} />;
      })}
    </div>
  );
};

export default CardList;
