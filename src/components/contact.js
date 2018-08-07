import React from 'react';
import ContactModalContainer from './contact-modal-container';
import ContactLinks from './contactlinks';
import AlertModal from './alertModal';

class contact extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'none',
      type:'none',
      lastPositon:undefined,
      alertModal: {type:'none', data: undefined}
    }
    this.toggle = this.toggle.bind(this);
    this.unToggle = this.unToggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
    this.closeAlertModal = this.closeAlertModal.bind(this);
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
    if (Math.abs(lastScrollY - this.state.lastPositon) > 1000) {
      this.setState({selected:'none', type:'none'});
    }
  }

  unToggle(selected, type) {
    if (this.props.format === 'desktop') { 
      this.setState({selected:'none', type: type})
    }
  }

  openAlertModal(item) {
    const data = item.target.parentNode.previousSibling.getAttribute('value');
    this.setState({alertModal:{type:'copy', data:`${data} has been copied`}});
    setTimeout(this.closeAlertModal, 1500);
  }

  closeAlertModal() {
    console.log(this.state);
    this.setState({alertModal:{type:'none', data:undefined}});
  }

  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <h1 className="section-header">Contact Me</h1>
          <span className="me"></span>
          <ContactModalContainer openAlertModal={this.openAlertModal} unToggle={this.unToggle} toggle={this.toggle} selected={this.state.selected}/>
          <ContactLinks  unToggle={this.unToggle} toggle={this.toggle} selected={this.state.selected}/>
        </div>
        <AlertModal type={this.state.alertModal.type} data={this.state.alertModal.data}/>
      </section>
    );
  };
};

module.exports = contact;