import React from 'react';
import ContactModalContainer from './contact-modal-container';

class contact extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'none',
    }
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(type) {
    this.setState({selected:type})
  }

  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <h1 className="section-header">Contact Me</h1>
          <div className="me"></div>
          <ContactModalContainer updateSelected={this.updateSelected} selected={this.state.selected}/>
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/dmytro-marchenko/" target="_blank" onMouseLeave={() => {this.updateSelected('none')}} onMouseEnter={() => {this.updateSelected('linkedin')}} className="linkedin link">
              <div className="linkedin hover"></div>
            </a>
            <a href="https://github.com/dmytromarchenko1998" target="_blank" onMouseLeave={() => {this.updateSelected('none')}} onMouseEnter={() => {this.updateSelected('github')}} className="github link">
              <div className="github hover"></div>
            </a>
            <a href="mailto:dmytromarchenko1998@gmail.com" onMouseLeave={() => {this.updateSelected('none')}} onMouseEnter={() => {this.updateSelected('mail')}} className="mail link">
              <div className="mail hover"></div>
            </a>
            <a href="tel:925-457-1925" onMouseLeave={() => {this.updateSelected('none')}} onMouseEnter={() => {this.updateSelected('phone')}} className="phone link">
              <div className="phone  hover"></div>
            </a>
          </div>
        </div>
      </section>
    );
  };
};

module.exports = contact;