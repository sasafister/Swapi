import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import Search from './containers/search'
import SwapiList from './containers/swapi_list'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search /> 
        <SwapiList />
      </div>
    );
  }
}

