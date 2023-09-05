import React from 'react';
import '../App.css';

export default function Lists(props) {
  return (
    <div className="van-list">
      <img src={props.image} />
      <div className="head">
        <h2>{props.name}</h2>
        <p>
          <b>${props.price}</b>
          /day
        </p>
      </div>
    </div>
  );
}
