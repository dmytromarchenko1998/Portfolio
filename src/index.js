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
      format: 'desktop',
      size: 'regular'
    }
    this.resize = this.resize.bind(this);
    this.resize();
  }

  componentDidMount() {
    window.onresize = () => {
      this.resize();
    };
    this.resize();
  }

  resize() {
    let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let screenWidth = window.screen.availWidth;
    let screenHeight = window.screen.availHeight;
    let styleProps = []
    if (screenHeight > screenWidth) { //mobile sizing
      styleProps[1] = {name:'--section-header-size', value:'4em'};
      styleProps[2] = {name:'--project-size', value: '40em'};    
      styleProps[3] = {name:'--link-size', value: '6em'};
      styleProps[4] = {name:'--me-size', value: '15em'};
      styleProps[5] = {name:'--link-modal-font', value: '2em'};
      styleProps[6] = {name:'--copy-icon-padding', value: '3em'};
      this.setState({format:'mobile'});
    } else { //desktop sizing
      let size = 'regular';
      styleProps[1] = {name:'--section-header-size', value:'2em'};
      styleProps[2] = {name:'--project-size', value:'20em'};
      styleProps[3] = {name:'--link-size', value: '4em'};
      styleProps[4] = {name:'--me-size', value: '10em'};
      styleProps[5] = {name:'--link-modal-font', value: '1em'};
      styleProps[6] = {name:'--copy-icon-padding', value: '1.5em'};
      if (windowWidth < 650) {
        size = 'skinny';
      }
      this.setState({format:'desktop', size: size});
    }
    styleProps.forEach(({ name, value}) => {
      document.documentElement.style.setProperty(name, value)
    })
  }

  render() {
    return (
      <div>
        <NavBar format={this.state.format} size={this.state.size}/>
        <Cover />
        <ProjectsList format={this.state.format}/>
        <Technologies />
        <About format={this.state.format}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));