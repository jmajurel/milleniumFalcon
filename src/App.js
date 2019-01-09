import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';

const baseURL = 'https://api.nasa.gov/';
const API_KEY = 'j8s27U2jqLfun3bsPqzUpaxPN99WsdVvesbiTmMR';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      POD: {}
    }
  }

  componentWillMount() {
    fetch(`${baseURL}planetary/apod?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
	this.setState({POD: data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
	<HomePage {...this.state.POD}/>
      </div>
    );
  }
}

export default App;
