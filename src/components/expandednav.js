import React from 'react';

const ExpandedNav = ({ scrollTo, toggleNav, expanded }) => {
  if (expanded) { 
    return (
      <div className="expanded-nav">
        <li onClick={() => {toggleNav(); scrollTo('#cover');}} className="first nav item"><a>Home</a></li>
        <li onClick={() => {toggleNav(); scrollTo('#projects');}} className="nav item"><a>Projects</a></li>
        <li onClick={() => {toggleNav(); scrollTo('#technologies');}} className="nav item"><a>Technologies</a></li>
        <li onClick={() => {toggleNav(); scrollTo('#about');}} className="nav item"><a>About</a></li>
        <li onClick={() => {toggleNav(); scrollTo('#contact');}} className="nav item"><a>Contact Me</a></li>
      </div>
    )
  } else {
    return null;
  }
}

module.exports = ExpandedNav;