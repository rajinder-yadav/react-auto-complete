import React, { Component } from 'react';
import './App.css';
import AutoCompleteInput from './containers/autocomplete-input';
import ShowNames from './containers/show-names';

export default class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col">
            <h3>Auto Complete</h3>
            <div>
              <AutoCompleteInput />
            </div>
          </div>
          <div className="col">
            <h3>Filtered Names</h3>
            <ShowNames />
          </div>
        </div>
      </div>
    );
  }
}
