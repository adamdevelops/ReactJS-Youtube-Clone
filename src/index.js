import React from 'react';
import ReactDOM from 'react-dom'


// Create a new component. This component should produce
// some HTML
const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

//Can also be done as '<App></App>'
// document.querySelector() used to find div with class 'container'
// then render the App component within the div with class 'container'
