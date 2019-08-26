import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'


class App extends Component {
  constructor(props){
    super(props)
    this.state = { videos: [] }
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: response.data.items
    })
  }

  render() {
    const { videos } = this.state
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;