import React from 'react';

class Lifecycle extends React.Component{
  //init
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }

  componentDidMount() {
    this.setState({counter: this.state.counter + 1});
  }

  shouldComponentUpdate(prevProp, prevState, snapshot) {
    if (prevState.counter < 7) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log("Previous value of the counter is " + prevState.counter);
  }

  additional = () => {
    return "something back";
  }

  componentWillUnmount() {
    console.log("Bye bye");
  }
  
  render() {
    if (this.state.counter == 5) {
      throw new Error("Some unexpected guest is visiting the page");
    }
    return (
      <div className="App">
        <p>Counter: {this.state.counter}</p>
        <button type="button" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Lifecycle;
