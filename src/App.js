import React, { Component } from 'react';
import giphyModules from './GiphyRequests';
import TrendingBody from './TrendingBody';
import SearchBar from './SearchBar';
import SearchBody from './SearchBody';
import FavoriteGifs from './FavoriteGifs';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      trendingGif: [],
      searchedGif: [],
      update: false,
    }
  }

  componentDidMount() {
    giphyModules.getTrending((data) => {
      this.setState({ trendingGif: data.data.data })
    });
  }

  handleFavoriteColor = () => {
    this.setState({ update: !this.state.update })
  }

  handleSearch = (query) => {
    this.setState({ search: query })
    let querySearch = query.replace(/ /g,'+');
    giphyModules.getSearch(querySearch, (data) => {
      this.setState({ searchedGif: data.data.data })
    })
  }

  addToFavoriteGif = (id, name, url) => {
    var favorites = JSON.parse(localStorage.getItem('bardo')) || [];
    var newGif = {id, name, url};
    var found = favorites.some(gif => gif.id === id);
    if (!found) {
      favorites.push(newGif);
    }
    localStorage.setItem('bardo', JSON.stringify(favorites))
  }

  render() {
    return (
      <div>
        <SearchBar
          handleSearch={this.handleSearch}
        />
        <FavoriteGifs handleFavoriteColor={this.handleFavoriteColor}/>
        <SearchBody
          handleFavoriteColor={this.handleFavoriteColor}
          favorite={this.addToFavoriteGif}
          searchedGif={this.state.searchedGif}
          search={this.state.search}
        />
        <TrendingBody
          handleFavoriteColor={this.handleFavoriteColor}
          favorite={this.addToFavoriteGif}
          trendingGifs={this.state.trendingGif}
        />
      </div>
    );
  }
}

export default App;
