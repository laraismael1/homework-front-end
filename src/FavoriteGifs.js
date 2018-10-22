import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './Search.css';


class FavoriteGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFavoriteList: true
    }
  }

  toggleFavorite = () => {
    this.setState({
      hideFavoriteList: !this.state.hideFavoriteList
    })
  }

  render() {

    return (
      <div>
        <button className='searchButton' onClick={this.toggleFavorite}>
          SHOW URL OF FAVORITE GIF
        </button>
        {!this.state.hideFavoriteList && <ListOfFavGifs />}
      </div>
    )
  }
}

const ListOfFavGifs =  () => {
  const gifList = JSON.parse(localStorage.getItem('bardo')) || [];
  const component = gifList.map(gif => (
    <Paper key={gif.id} className='gifList'>
      <a href={gif.url}>
        {gif.name}
      </a>
    </Paper>
  ))
  return component;
};

export default FavoriteGifs;
