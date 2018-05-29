import React, { Component } from 'react';
import './App.css';

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
    this.setState({ toggle: !this.state.toggle }, this.logMe);
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
        <button className="button" disabled={this.state.counter > 10}
          onClick={this.handleToggle}
        > 
          Toggle me 
        </button>
        <div className={classes}> 
            Now You see me 
        </div>
      </div>
    );
  }
}

export default App;
