import React, { Component } from 'react';
import ProjectData from './projectdata';

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page:0
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(way) {
    const curPage = this.state.page;
    if ((way === 'next') && (curPage < this.props.projectData.pages.length - 1)) {
      let newPage = curPage + 1;
      this.setState({page:newPage})
    } else if ((way === 'prev') && (curPage > 0)){
      let newPage = curPage - 1;
      this.setState({page:newPage})
    }
    // console.log(this.props.projectData[this.state.page]);
  }

  render() { 
    return (
      <section id="projectmodal" className={this.props.projectData.id}>
        <div className="closemodal">
          <p onClick={() => {this.props.toggle(this.props.projectData.id, 'click')}}>&#10005;</p>
        </div>
        <div className="projectmodalcontainer">
          <ProjectData pageData={this.props.projectData.pages[this.state.page]}/>
          <div className="modalPagination">
            <span onClick={()=>{this.changePage('prev')}}>&#10140;</span>
            <p>{this.state.page + 1}</p>
            <span onClick={()=>{this.changePage('next')}}>&#10140;</span>
          </div>
        </div>
      </section>
    )
  }
}

module.exports = ProjectModal;