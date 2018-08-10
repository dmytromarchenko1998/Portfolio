import React from 'react';
import Project from './project';

const projects = [{id:'zaget', pages:['Replicated production environment by generating 10M Postgres records with cache hit rate of 90%', 'Implemented Server-side rendering to improve visual experience while page is loading', 'Optimized from 450 RPS to 1400 RPS by adding Redis LRU caching between server and database', 'Further Increased RPS from 1400 to over 3000 using AWS Load Balancer with 3 AWS micro instances']}, {id:'gottago', pages:['Utilized Docker images along with docker-compose to integrate components', 'Redesigned the functionality of a component from a legacy codebase', 'Diagnosed bugs using Jest and Enzyme', 'Deployed proxy along with microservices on an Amazon EC2 instance']},{id:'foodees', pages:['Used Google’s Maps API to convert user coordinates into street address', 'Optimized queries by using Mongo’s Geospatial Operators to find nearest restrooms within specified radius by using Mongo’s Geospatial operators']}];

class projectsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'none',
      type: 'click',
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
    let lastScrollY = window.scrollY;
    if (Math.abs(lastScrollY - this.state.lastPositon) > 700) {
      this.setState({selected:'none', type:'none'});
    }
  }

  render() {
    return (
      <section id="projects">
        <div className="projects-container">
          <div>
            <h1 id="projectsheader" className="section-header">Projects</h1>
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