import React from 'react';

const project = ({ projectData, toggle, unToggle, selected, type, format }) => {

  let projectName = projectData.id;
  if (projectData.id === 'gottago') {
    projectName = 'Gotta Go';
  }
  if (projectData.id === selected) {
    if (type === 'hover') {
      return (
        <div id={projectData.id} onMouseLeave={() => {unToggle(projectData.id, 'hover')}} onMouseEnter={() => {toggle(projectData.id, 'hover')}} onClick={() => {toggle(projectData.id, 'click')}} className={`project viewmore ${format}`}>
          <div>
            <div><h4>View More</h4></div>
          </div>
        </div>
      )
    } else {
      return (
        <div id={projectData.id} onMouseLeave={() => {unToggle(projectData.id, 'hover')}} onMouseEnter={() => {toggle(projectData.id, 'hover')}} onClick={() => {toggle(projectData.id, 'click')}} className={`project ${format}`}>
          <div>
            <div><h4>selected</h4></div>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div id={projectData.id} onMouseEnter={() => {toggle(projectData.id, 'hover')}} onClick={() => {toggle(projectData.id, 'click')}} className={`project cover ${format}`}>
      <div className="blur layer"><div className="gradient layer"></div></div>
        <h4>{projectName}</h4>
      </div>
    )
  }
}

module.exports = project;