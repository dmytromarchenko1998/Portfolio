import React from 'react';
import Project from './project';

const projects = [{id:'zaget'},{id:'gottago'},{id:'foodees'}];

class projectsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'none',
      type: 'click'
    }
    this.toggle = this.toggle.bind(this);
    this.unToggle = this.unToggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.closeModal);
  }

  toggle(project, type) {
    if ((this.props.format === 'desktop') || (type === 'click')) { 
      if ((this.state.selected === project) && (this.state.type === 'click')) {
        this.setState({selected:'none', type: type});
      } else {
        this.setState({selected:project, type: type})
      }
    } 
  }

  unToggle(project, type) {
    if (this.props.format === 'desktop') { 
      if (this.state.type === 'hover') {
        this.setState({selected:'none', type: type})
      }
    }
  }

  closeModal() {
    this.setState({selected:'none', type:'none'});
  }

  render() {
    return (
      <section id="projects">
        <div className="projects-container">
          <div>
            <h1 className="section-header">Projects</h1>
          </div>
          <div className="project-list">
            {projects.map(project => <Project type={this.state.type} toggle={this.toggle} unToggle={this.unToggle} selected={this.state.selected} projectData={project}/>)}
          </div>
        </div>
      </section>
    )
  }
};

module.exports = projectsList;