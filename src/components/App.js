import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


class App extends Component {
  constructor(props){
    super(props)
    this.state = { videos: [], selectedVideo: null }
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

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { videos, selectedVideo } = this.state
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;