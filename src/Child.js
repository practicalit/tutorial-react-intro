import React from 'react';
import "./App.css";
import ErrorBoundary from './ErrorBoundary';
import Lifecycle from "./Lifecycle";

class Child extends React.Component{
  state = {
    title: "Child component here"
  }
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Lifecycle />
        </ErrorBoundary>          
      </div>
    );
  }
}

export default Child;
