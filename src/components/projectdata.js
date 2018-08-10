import React from 'react';

const ProjectData = ({ pageData }) => {
  return (
    <div className="projectData">
      {pageData.map((item) => {
        return (<p>{item}</p>)
      })}
    </div>
  )
}

module.exports = ProjectData;