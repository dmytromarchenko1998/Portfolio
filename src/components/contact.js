import React from 'react';
import ContactModalContainer from './contact-modal-container';
import ContactLinks from './contactlinks';

class contact extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'none',
      type:'none',
      lastPositon:undefined
    }
    this.toggle = this.toggle.bind(this);
    this.unToggle = this.unToggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.closeModal);
    setInterval(()=> {
      this.setState({lastPositon:window.scrollY})
    }, 500);
  }

  toggle(selected, type) {
    if ((this.props.format === 'desktop') || (type === 'click')) { 
      if ((this.state.selected === selected) && (type === 'click')) {
        this.setState({selected:'none', type: type});
      } else {
        this.setState({selected:selected, type: type})
      }
    }
  }

  closeModal() {
    let lastScrollY = window.scrollY;
    if (Math.abs(lastScrollY - this.state.lastPositon) > 500) {
      this.setState({selected:'none', type:'none'});
    }
  }

  unToggle(selected, type) {
    if (this.props.format === 'desktop') { 
      this.setState({selected:'none', type: type})
    }
  }

  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <h1 className="section-header">Contact Me</h1>
          <span className="me"></span>
          <ContactModalContainer unToggle={this.unToggle} toggle={this.toggle} selected={this.state.selected}/>
          <ContactLinks unToggle={this.unToggle} toggle={this.toggle} selected={this.state.selected}/>
        </div>
      </section>
    );
  };
};

module.exports = contact;