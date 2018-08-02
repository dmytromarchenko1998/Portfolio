import React, { Component } from 'react';
import skills from '../../data/skills.js'

class technologies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected:'zaget'
    }
    this.toggleTech = this.toggleTech.bind(this);
  }

  componentDidMount() {
    this.updateSelector();
  }

  toggleTech (project) {
    this.setState({selected:project}, this.updateSelector);
    // console.log(document.getElementsByClassName(`selector ${project}`)[0].classList.toggle('selected'));
  }

  updateSelector () {
    let selectors = Array.from(document.getElementsByClassName('selector'));
    selectors.forEach(({ classList }) => {
      if (classList.contains(this.state.selected)) {
        classList.add('selected');
      } else {
        classList.remove('selected');
      }
    })
    // document.getElementsByClassName(`selector ${this.state.selected}`)[0].classList.toggle('selected');
  }

  render() {
    return (
      <section id="technologies">
        <div className="technologies-container">
          <h1 className="section-header">Technologies</h1>
          <div className="project-selector">
            <div className="selector zaget" onClick={() => {this.toggleTech('zaget')}}>Zaget</div>
            <div className="selector gottago" onClick={() => {this.toggleTech('gottago')}}>Gotta Go</div>
            <div className="selector foodees" onClick={() => {this.toggleTech('foodees')}}>Foodees</div>
          </div>
          <div className="technology-list">
          {skills.map(({ name, projects })=> {
            let project = '';
            if (projects.includes(this.state.selected)) {
              project = this.state.selected;
            }
            return (
              <div className={`technology ${project}`}>{name}</div>
            );
          })}
          </div>
        </div>
      </section>
    )
  }
};

module.exports = technologies;