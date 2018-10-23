import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import './Search.css';


class FavoriteGifs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideFavoriteList: false,
      favList: [],
    }
  }

  removeFavorite = (e) => {
    const gifList = this.state.favList
    const idList = gifList.map(gif => gif.id);
    gifList.splice(idList.indexOf(e.target.name), 1);
    localStorage.setItem('bardo', JSON.stringify(gifList));
    this.setState({
      favList: gifList
    })
    this.props.handleFavoriteColor();
   }

  toggleFavorite = () => {
    const gifList = JSON.parse(localStorage.getItem('bardo')) || [];
    this.setState({
      favList: gifList,
      hideFavoriteList: !this.state.hideFavoriteList
    })
  }

  render() {
    return (
      <div>
        <button className='buttonStyle' onClick={this.toggleFavorite}>
          SHOW URL OF FAVORITE GIF
        </button>
        {this.state.hideFavoriteList && <ListOfFavGifs removeFavorite={this.removeFavorite} favList={this.state.favList}/> }
      </div>
    )
  }
}

const ListOfFavGifs =  (props) => {
  const component = props.favList.map(gif => (
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


FavoriteGifs.propTypes = {
  handleFavoriteColor: PropTypes.func,
};

export default FavoriteGifs;
