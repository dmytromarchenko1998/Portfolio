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
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggle(selected, type) {
    if ((this.props.format === 'desktop') || (type === 'click')) { 
      if ((this.state.selected === selected) && (type === 'click')) {
        this.setState({selected:'none', type: type}, this.toggleImage);
      } else {
        this.setState({selected:selected, type: type}, this.toggleImage)
      }
    }
  }

  unToggle(selected, type) {
    if (this.props.format === 'desktop') { 
      this.setState({selected:'none', type: type}, this.toggleImage)
    }
  }

  toggleImage() {
    const items = ['linkedin', 'github', 'mail', 'phone']
    let selected = this.state.selected;
    items.forEach(item => {
      // window.getComputedStyle(document.documentElement).getPropertyValue(`--${item}`);
      let cssVal = window.getComputedStyle(document.documentElement).getPropertyValue(`--${item}`);
      if (item === selected){
        if (cssVal !== `url(${item}-hover.png)`) {
          document.documentElement.style.setProperty(`--${item}`, `url(${item}-hover.png)`)
        }
      } else {
        if (cssVal !== `url(${item}.png)`) {
          document.documentElement.style.setProperty(`--${item}`, `url(${item}.png)`)
        }
      }
    })
  }

  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <h1 className="section-header">Contact Me</h1>
          <div className="me"></div>
          <ContactModalContainer unToggle={this.unToggle} toggle={this.toggle} selected={this.state.selected}/>
          <div className="contact-info">
            <div onClick={() => {this.toggle('linkedin', 'click')}} onPointerLeave={() => {this.unToggle('linkedin', 'hover')}} onPointerEnter={() => {this.toggle('linkedin', 'hover')}} className="linkedin link"></div>
            <div onClick={() => {this.toggle('github', 'click')}} onPointerLeave={() => {this.unToggle('github', 'hover')}} onPointerEnter={() => {this.toggle('github', 'hover')}} className="github link"></div>
            <div onClick={() => {this.toggle('mail', 'click')}} onPointerLeave={() => {this.unToggle('mail', 'hover')}} onPointerEnter={() => {this.toggle('mail', 'hover')}} className="mail link"></div>
            <div onClick={() => {this.toggle('phone', 'click')}} onPointerLeave={() => {this.unToggle('phone', 'hover')}} onPointerEnter={() => {this.toggle('phone', 'hover')}} className="phone link"></div>
          </div>
        </div>
      </section>
    );
  };
};

module.exports = contact;