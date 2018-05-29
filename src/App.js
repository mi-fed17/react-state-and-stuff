import React, { Component } from 'react';
import posed from 'react-pose';
import List from './List';
import './App.css';

const Box = posed.div({
  visible: { 
    opacity: 1,
    translateX: "0%",
    rotate: "0deg"
  },
  hidden: {
    opacity: 0,
    translateX: "100%",
    rotate: "180deg"
  }
});

class App extends Component {

  state = {
    toggle: false,
    counter: 0,
  }

  handleToggle = () => {
    this.handleClick();
    // This is an async function, optional callback will be
    // called when the state has changed, this will log 'hello'
    // when we know that state has changed
    this.setState({ toggle: !this.state.toggle });
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1});
  }

  logMe = () => {
    console.log("Hello");
  }

  render() {
    // classes will be either 'box hide' or 'box'
    // Render will run every time state is changed
    // Every transition is based on css
    let classes = 'box ';
    if(!this.state.toggle){
      classes += 'hide';
    }
    return (
      <div>
        <p>{ this.state.counter }</p>
        <button className="button" onClick={this.handleToggle}> 
          Toggle me 
        </button>
        <Box className="box" pose={this.state.toggle ? 'hidden' : 'visible'}>
          Hello
        </Box>
        <List />
      </div>
    );
  }
}

export default App;
