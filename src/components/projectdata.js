import React from 'react';

const ProjectData = ({ pageData }) => {
  const checkImage = (image) => {
    if (image !== undefined) {
      // document.documentElement.style.setProperty('--project-image', `url(${image})`);
      return <div style={{backgroundImage:`url(${image})`}} className="project-image"></div>
    } else {
      return null;
    }
  }

  const checkData = (data) => {
    if (data !== undefined) {
      return <p>{data}</p>
    } else {
      return null;
    }
  }
  return (
    <div className="projectData">
      {checkImage(pageData.image)}
      {checkData(pageData.data)}
    </div>
  )
}

module.exports = ProjectData;