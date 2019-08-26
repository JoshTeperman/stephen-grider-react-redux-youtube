import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;