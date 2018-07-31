import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cover from './components/cover';
import NavBar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
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
        <Projects />
        <Technologies />
        <About />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));