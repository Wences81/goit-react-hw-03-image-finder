import { Component } from 'react';

import './App.css';

export class App extends Component {
  state = {};

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  render() {
    return <div></div>;
  }
}
