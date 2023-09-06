import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

export default function Page404() {
  return (
    <div style={{ height: '200px' }}>
      <h1>Sorry, the page you were looking for was not found.</h1>
      <NavLink to="/" className="home-button">
        Return to Home
      </NavLink>
    </div>
  );
}
