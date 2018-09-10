import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY="AIzaSyALae5TXRrzX5boyICzc1OfySV2ZQmVfmQ";

const App = () => {
  return (
    <div>
    <SearchBar />
  </div>
  )
}

ReactDOM.render(<App />, document.querySelector(".container"))