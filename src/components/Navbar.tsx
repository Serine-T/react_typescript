import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () =>(
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);