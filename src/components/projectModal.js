import React from 'react';

const ProjectModal = ({ toggle, projectData }) => {
  return (
    <section id="projectmodal" className={projectData.id}>
      <div className="closemodal">
        <p onClick={() => {toggle(projectData.id, 'click')}}>&#10005;</p>
      </div>
      <div className="projectmodalcontainer">
        <div className="modalPagination">
          <span>&#10140;</span>
          <span>&#10140;</span>
        </div>
      </div>
    </section>
  )
}

module.exports = ProjectModal;