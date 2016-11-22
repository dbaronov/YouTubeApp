// Importing libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importing components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

let API_KEY = 'AIzaSyDpsHOpn_xTSrRrcvlBIL0SzAwmX38i8ck';


// This component Renders our app
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			activeVideo: "active"
		};

		this.videoSearch('zelda gameplay');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState(
				{
					videos: videos,
					selectedVideo: videos[0]
				 }
			);
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
					activeVideo={this.state.activeVideo} />
			</div>
		)
	}
}

// Take this components HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));