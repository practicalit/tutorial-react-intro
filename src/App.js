import React from "react";
import Child from "./Child";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "I am the parent",
      desc: "Parent description goes here",
      error: false,
      showChild: true
    }
    this.hideChild = this.hideChild.bind(this);
  }

  divElement = <div>{'Hello there'.toUpperCase()}</div>;

  data = {
    usa: {
      officialName: "The United States of America",
      capital: "Washington DC"
    }
  }

  componentWillUnmount(error, info) {
    let theState = this.state;
    theState.error = true;
    this.setState(theState);
  }

  updateJsxElement = (element) => {
    return <div>This is the new element {element}</div>
  }
  
  handleClick = () => {
    let newString = "parent here";
    this.setState({title: newString})
  }

  hideChild() {
    let state = this.state;
    state.showChild = false;
    this.setState(state);
  }

  render() {
    if (this.state.error) {
      return <h1>error has occured</h1>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.handleClick}>Reactcks.</p>
          <p>  {this.state.title}</p>
          <p>  {this.data.usa.capital}
          </p>
    <p>{5*8} {"practical it".toUpperCase()} {Math.random()*12}</p>
          
          {this.state.showChild && <Child message={this.data.usa.officialName} todo = "Study hard" />}
          {this.updateJsxElement(this.divElement)}
          <button type="button" onClick={this.hideChild}>Hide child</button>
        </header>
       
      </div>
    );
  }
}

export default App;
