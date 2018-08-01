import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cover from './components/cover';
import NavBar from './components/navbar';
import About from './components/about';
import ProjectsList from './components/projectsList';
import Technologies from './components/technologies';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Cover />
        <ProjectsList />
        <Technologies />
        <About />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));