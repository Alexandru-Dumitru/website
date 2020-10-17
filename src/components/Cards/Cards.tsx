import React, { ReactElement } from 'react';
import CardItem from '../CardItem/CardItem';
import './Cards.css';

interface Props {}

// eslint-disable-next-line no-empty-pattern
function Cards({}: Props): ReactElement {
  return (
    <div className="cards">
      <h1>Check out these destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/img-9.jpg"
              text="Explore the hidden waterfall"
              label={'Adventure'}
              path="/services"
            />
            <CardItem
              src="./images/img-2.jpg"
              text="Travel through the Islands of Bali"
              label={'Luxury'}
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/img-1.jpg"
              text="Some other text here 1"
              label={'Adventure'}
              path="/services"
            />
            <CardItem
              src="./images/img-3.jpg"
              text="Some other text here 2"
              label={'Beach'}
              path="/services"
            />
            <CardItem
              src="./images/img-6.jpg"
              text="Some other text here 3"
              label={'City'}
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
