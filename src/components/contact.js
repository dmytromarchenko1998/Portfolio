import React from 'react';
import ContactModalContainer from './contact-modal-container';
import ContactLinks from './contactlinks';

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
      let cssVal = window.getComputedStyle(document.documentElement).getPropertyValue(`--${item}`);
      if (item === selected){
        if (cssVal.split('hover').length === 1) {
          console.log('change')
          document.documentElement.style.setProperty(`--${item}`, `url(${item}-hover.png)`)
        }
      } else {
        if (cssVal.split('hover').length === 2) {
          console.log('change')
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
          <ContactLinks unToggle={this.unToggle} toggle={this.toggle} selected={this.state.selected}/>
        </div>
      </section>
    );
  };
};

module.exports = contact;