import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './compoents/Video_detail';
const API_KEY = 'AIzaSyDQFcpcvhIVvda3fBVKP2hubuyJJX52fiY';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: []};
    YTSearch({key: API_KEY, term: 'kittens'}, (videos)=>{
      this.setState({videos})
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.vidoes[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );

  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
