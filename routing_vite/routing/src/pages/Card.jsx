import React from 'react';
import '../App.css';

export default function Card(props) {
  return (
    <div className="cards">
      <img src={props.image} />
      <div className="head">
        <h2>{props.name}</h2>
        <p>
          <b>${props.price}</b>
          <br />
          /day
        </p>
      </div>
      <button className={props.type}>{props.type}</button>
    </div>
  );
}
