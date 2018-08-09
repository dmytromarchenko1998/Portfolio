import React from 'react';
import ProjectModal from './projectModal';

const project = ({ projectData, toggle, unToggle, selected, type, }) => {

  let projectName = projectData.id;
  if (projectData.id === 'gottago') {
    projectName = 'Gotta Go';
  }
  if (projectData.id === selected) {
    if (type === 'hover') {
      return (
        <div id={projectData.id} onMouseLeave={() => {unToggle(projectData.id, 'hover')}} onMouseEnter={() => {toggle(projectData.id, 'hover')}} onClick={() => {toggle(projectData.id, 'click')}} className={`project cover`}>
          <div className="layer"><div className="gradient layer"></div></div>
          <h4>View More</h4>
        </div>
      )
    } else if (type === 'click'){
      return (
        <div id={projectData.id} className={`project`}>
          <ProjectModal projectData={projectData} toggle={toggle} />
        </div>
      )
    }
  } else {
    return (
      <div id={projectData.id} onMouseEnter={() => {toggle(projectData.id, 'hover')}} onClick={() => {toggle(projectData.id, 'click')}} className={`project cover`}>
        <div className="layer"></div>
      </div>
    )
  }
}

module.exports = project;