import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search_bar';

const API_KEY = 'AIzaSyDQFcpcvhIVvda3fBVKP2hubuyJJX52fiY';
const App = () => {
  return (
    <div>

      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
