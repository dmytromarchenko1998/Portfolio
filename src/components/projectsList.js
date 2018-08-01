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
  }

  toggle(project, type) {
    if ((this.state.selected === project) && (this.state.type === 'click')) {
      this.setState({selected:'none', type: type});
    } else {
      this.setState({selected:project, type: type})
    }
  }

  unToggle(project, type) {
    if (this.state.type === 'hover') {
      this.setState({selected:'none', type: type})
    }
  }

  render() {
    return (
      <section id="projects">
        <div className="projects-container">
          <div>
            <h1 className="section-header">Projects</h1>
          </div>
          <div className="project-list">
            {projects.map(project => <Project format={this.props.format} type={this.state.type} toggle={this.toggle} unToggle={this.unToggle} selected={this.state.selected} projectData={project}/>)}
          </div>
        </div>
      </section>
    )
  }
};

module.exports = projectsList;