import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import ExpandedNav from './expandednav';

class NavBar extends Component {
  constructor(props) {
    super(props)
    smoothscroll.polyfill();
    this.state = {
      expanded: false,
      lastPositon:undefined
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.closeModal);
    setInterval(()=> {
      this.setState({lastPositon:window.scrollY})
    }, 500);
  }

  scrollTo(section) {
    document.querySelector(section).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  toggleNav() {
    if (this.state.expanded === true) {
      this.setState({expanded:false});
    } else {
      this.setState({expanded:true});
    }
  }

  closeModal() {
    let lastScrollY = window.scrollY;
    if (Math.abs(lastScrollY - this.state.lastPositon) > 500) {
      this.setState({expanded:false});
    }
  }

  render() {
    if ((this.props.format === 'desktop') && (this.props.size === 'regular')) {
      return (
        <nav className="navbar">
          <li className="name"><h1>Dmytro</h1><h1>Marchenko</h1></li>
          <li onClick={() => {this.scrollTo('#cover')}} className="nav item"><a>Home</a></li>
          <li onClick={() => {this.scrollTo('#projects')}} className="nav item"><a>Projects</a></li>
          <li onClick={() => {this.scrollTo('#technologies')}} className="nav item"><a>Technologies</a></li>
          <li onClick={() => {this.scrollTo('#about')}} className="nav item"><a>About</a></li>
          <li onClick={() => {this.scrollTo('#contact')}} className="nav item"><a>Contact Me</a></li>
        </nav>
      )
    } else {
      return (
         <nav className="navbar">
           <li className="name"><h1>Dmytro</h1><h1>Marchenko</h1></li>
           <li onClick={this.toggleNav} className="nav item">
             <div className="nav-icon">
               <span className="nav-line"></span>
               <span className="nav-line"></span>
               <span className="nav-line"></span>
             </div>
           </li>
           <ExpandedNav scrollTo={this.scrollTo} expanded={this.state.expanded} toggleNav={this.toggleNav} />
         </nav>
      )
    }
  }
}

module.exports = NavBar;