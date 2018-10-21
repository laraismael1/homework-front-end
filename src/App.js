import React, { Component } from 'react';
import giphyModules from './GiphyRequests';
import TrendingBody from './TrendingBody';
import SearchBar from './SearchBar';
import SearchBody from './SearchBody';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      trendingGif: [],
      searchedGif: []
    }
  }

  componentDidMount() {
    giphyModules.getTrending((data) => {
      this.setState({ trendingGif: data.data.data })
    });
  }

  handleSearch = (query) => {
    this.setState({ search: query })
    let querySearch = query.replace(/ /g,'+');
    giphyModules.getSearch(querySearch, (data) => {
      this.setState({ searchedGif: data.data.data })
    })
  }

  render() {
    console.log('searchedGif', this.state.searchedGif)
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} />
        <SearchBody searchedGif={this.state.searchedGif} search={this.state.search}/>
        <TrendingBody trendingGifs={this.state.trendingGif} />
      </div>
    );
  }
}

export default App;
