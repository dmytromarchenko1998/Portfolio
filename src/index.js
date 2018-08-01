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
    this.state = {
      format: '',
    }
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.onresize = () => {
      this.resize();
    };
    this.resize();
  }

  resize() {
    let format = '';
    if (window.screen.availHeight > window.screen.availWidth) {
      format = 'mobile';
    }
    this.setState({format:format});
  }

  render() {
    return (
      <div>
        <NavBar format={this.state.format}/>
        <Cover format={this.state.format}/>
        <ProjectsList format={this.state.format}/>
        <Technologies format={this.state.format}/>
        <About format={this.state.format}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));