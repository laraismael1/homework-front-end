import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import './Giphys.css';

class FavoriteList extends Component {

  render() {
    const { removeFavorite, favList } = this.props;
    return (
      favList.map(gif => (
        <Paper key={gif.id} className='favList'>
          <a href={gif.url}>
            {gif.name}
          </a>
          <button name={gif.id} className='buttonStyle' onClick={e => removeFavorite(e)}>
            REMOVE
          </button>
        </Paper>
      ))
    )
  }
};

FavoriteList.propTypes = {
  update: PropTypes.bool,
  removeFavorite: PropTypes.func,
  favList: PropTypes.array,
};

export default FavoriteList;
