import React, { Component } from 'react';
import posed from 'react-pose';

const List = posed.ul({
  // On start, closed position, to the left of the screen
  initialPose: 'closed',
  open: {
    // On open, go back to standard position, no translate on the x axis
    x: "0%",
    // Delay animating children by 200ms
    delayChildren: 200,
    // Delay each child by 500m
    staggerChildren: 200
  },
  closed: {
    // on closed, move the list the left on x axis
    x: "-300%",
    // Delay the whole list animation on exit
    delay: 300,
    // Delay each child on exit
    staggerChildren: 100,
  }
});

const Item = posed.li({
  initialPose: 'closed',
  open: { opacity: 1, y: 0 }, // Change opacity, fade in
  closed: { opacity: 0, y: 20 } //fade out and go down 20px
});

class ListView extends Component {
  state = {
    visible: false,
    list: [
      "Thing",
      "another",
      "third"
    ]
  }

  toggleVisible = () => this.setState({ visible: !this.state.visible });

  render() {
    return (
      <React.Fragment>
        <button className="button" onClick={this.toggleVisible} > Toggle </button>
        { /* trigger the animation when state changes*/ }
        <List className="list" pose={this.state.visible ? 'open' : 'closed'}>
          {this.state.list.map((item, i) => <Item key={i}> { item } </Item>)}
        </List>
      </React.Fragment>
    );
  }
}

export default ListView;