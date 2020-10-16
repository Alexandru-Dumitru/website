import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

interface Props {
  src: any;
  text: any;
  label: any;
  path: any;
}

function CardItem({ src, text, label, path }: Props): ReactElement {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt='Travel' className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
