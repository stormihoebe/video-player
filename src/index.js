import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/Video_detail';
const API_KEY = 'AIzaSyDQFcpcvhIVvda3fBVKP2hubuyJJX52fiY';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('kittens');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: "kittens "+term}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }
  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},500);

    return (
      <div>
        <h2>Kitten Video Search</h2>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );

  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
