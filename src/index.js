import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// SearchBar component
import SearchBar from './components/search_bar';
// VideoList component
import VideoList from './components/video_list';
// VideoList component
import VideoDetail from './components/video_detail';

// YouTube API KEY
const API_KEY = 'AIzaSyBbHpdUnI2DcvI90du7cibUNqw0Wex8myY';

// Create a new component. This component should produce
// some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null
     };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
        }); //this.setState({videos: videos}); when the key
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
         videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
