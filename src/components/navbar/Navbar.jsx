import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

//BEM - block element modifier

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={ logo } alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#home">What is GPT3?</a></p>
          <p><a href="#home">Open AI</a></p>
          <p><a href="#home">Case Studies</a></p>
          <p><a href="#home">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar