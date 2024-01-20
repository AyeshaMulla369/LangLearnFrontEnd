import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {


  return (
    <div className='cards' id='proj'>
      <h1>Check out the languages</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
              <CardItem
                src='images/english.jpg'
                text='English'
              />
              <CardItem
                src='images/german.jpg'
                text='German'
              />
              <CardItem
                src='images/french.jpg'
                text='French'
              />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;