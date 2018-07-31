import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

const NavBar = (props) => {
  smoothscroll.polyfill();
  const scrollTo = (section) => {
    document.querySelector(section).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  return (
    <nav className="navbar">
      <li className="name"><h1>Dmytro</h1><h1>Marchenko</h1></li>
      <li onClick={() => {scrollTo('#cover')}} className="nav item"><a>Home</a></li>
      <li onClick={() => {scrollTo('#projects')}} className="nav item"><a>Projects</a></li>
      <li onClick={() => {scrollTo('#technologies')}} className="nav item"><a>Technologies</a></li>
      <li onClick={() => {scrollTo('#about')}} className="nav item"><a>About</a></li>
      <li onClick={() => {scrollTo('#contact')}} className="nav item"><a>Contact Me</a></li>
    </nav>
  )
}

module.exports = NavBar;