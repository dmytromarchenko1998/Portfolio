import React from 'react';
import ContactModalContainer from './contact-modal-container';

class contact extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'none',
      type:'none',
    }
    this.toggle = this.toggle.bind(this);
    this.unToggle = this.unToggle.bind(this);
  }

  // updateSelected(selected) {
  //   this.setState({selected:selected})
  // }

  toggle(project, type) {
    if ((this.state.selected === project) && (this.state.type === 'click')) {
      this.setState({selected:'none', type: type});
    } else {
      this.setState({selected:project, type: type})
    }
  }

  unToggle(type) {
    if (this.state.type === 'hover') {
      this.setState({selected:'none', type: type})
    }
  }

  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <h1 className="section-header">Contact Me</h1>
          <div className="me"></div>
          <ContactModalContainer toggle={this.toggle} selected={this.state.selected}/>
          <div className="contact-info">
            <a link="https://www.linkedin.com/in/dmytro-marchenko/" target="_blank" onClick={() => {this.toggle('linkedin', 'click')}}onMouseLeave={() => {this.unToggle('hover')}} onMouseEnter={() => {this.toggle('linkedin')}} className="linkedin link">
              <div className="linkedin hover"></div>
            </a>
            <a link="https://github.com/dmytromarchenko1998" target="_blank" onClick={() => {this.toggle('github', 'click')}}onMouseLeave={() => {this.unToggle('hover')}} onMouseEnter={() => {this.toggle('github')}} className="github link">
              <div className="github hover"></div>
            </a>
            <a link="mailto:dmytromarchenko1998@gmail.com" onClick={() => {this.toggle('mail', 'click')}}onMouseLeave={() => {this.unToggle('hover')}} onMouseEnter={() => {this.toggle('mail', 'hover')}} className="mail link">
              <div className="mail hover"></div>
            </a>
            <a link="tel:925-457-1925" onClick={() => {this.toggle('phone', 'click')}}onMouseLeave={() => {this.unToggle('hover')}} onMouseEnter={() => {this.toggle('phone')}} className="phone link">
              <div className="phone  hover"></div>
            </a>
          </div>
        </div>
      </section>
    );
  };
};

module.exports = contact;