import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// SearchBar component
import SearchBar from './components/search_bar';

// YouTube API KEY
const API_KEY = 'AIzaSyBbHpdUnI2DcvI90du7cibUNqw0Wex8myY';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

// Create a new component. This component should produce
// some HTML
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
