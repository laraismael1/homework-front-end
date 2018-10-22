import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './Search.css';


class FavoriteGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFavoriteList: false,
    }
  }

  removeFavorite = (e) => {
    const gifList = JSON.parse(localStorage.getItem('bardo')) || [];
    const idList = gifList.map(gif => gif.id);
    gifList.splice(idList.indexOf(e.target.name), 1);
    localStorage.setItem('bardo', JSON.stringify(gifList));
    window.location.reload();
  }

  toggleFavorite = () => {
    this.setState({
      hideFavoriteList: !this.state.hideFavoriteList
    })
  }

  render() {
    return (
      <div>
        <button className='buttonStyle' onClick={this.toggleFavorite}>
          SHOW URL OF FAVORITE GIF
        </button>
        {this.state.hideFavoriteList && <ListOfFavGifs removeFavorite={this.removeFavorite}/>}
      </div>
    )
  }
}

const gifList = JSON.parse(localStorage.getItem('bardo')) || [];

const ListOfFavGifs =  (props) => {
  const component = gifList.map(gif => (
    <Paper key={gif.id} className='gifList'>
      <a href={gif.url}>
        {gif.name}
      </a>
      <button name={gif.id} className='buttonStyle' onClick={e => props.removeFavorite(e)}>
        REMOVE
      </button>
    </Paper>
  ))
  return component;
};

export default FavoriteGifs;
