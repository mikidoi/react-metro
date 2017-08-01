import _ from 'lodash';
import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import StationList from './containers/station_list';
import StationDetail from './containers/station_detail';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar';
import SearchBox from './components/search_box';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB6JmaTrFxJUfLppdHSno3OOJ4LR3MvHdk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= { 
      videos: [], 
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div className="App">
        <div className="App-header">
          <SearchBox onSearchTermChange={videoSearch} />
          <NavBar />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Grid>
            <Row>
              <StationList/>
              <StationDetail/>
            </Row>
            <Row>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
              onVideoSelect ={selectedVideo => this.setState({selectedVideo})} 
              videos={this.state.videos}/>
            </Row>
          </Grid> 
        </div>
      </div>
    );
  }
}

export default App;
