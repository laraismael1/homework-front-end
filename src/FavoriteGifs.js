import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FavoriteList from './FavoriteList';

import './Giphys.css';


class FavoriteGifs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideFavoriteList: false,
      favList: [],
      toggle: 'SHOW',
      tooltip: '',
    }
  }

  componentWillReceiveProps() {
    const gifList = JSON.parse(localStorage.getItem('bardo')) || [];
    this.setState({
      favList: gifList,
    })
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

  manageEmptyFavorite = () => {
    let tooltipText =
      this.state.favList.length
      ? ''
      : 'You have no favorite gifs.';

      this.setState({
        tooltip: tooltipText
      })

      setTimeout(() => (
        this.setState({ tooltip: ''})
      ), 5000);
  }

  toggleFavorite = () => {
    const gifList = JSON.parse(localStorage.getItem('bardo')) || [];

    let toggleName = this.state.toggle === 'SHOW' ? 'HIDE' : 'SHOW';

    this.setState({
      favList: gifList,
      hideFavoriteList: !this.state.hideFavoriteList,
      toggle: toggleName
    })
  }

  render() {
    return (
      <div>
        <p className='emptyAlert'>{this.state.tooltip}</p>
        <button
          className='buttonStyle'
          onClick={e => {this.toggleFavorite(); this.manageEmptyFavorite();}}
        >
          {`${this.state.toggle} FAVORITE GIF MANAGER`}
        </button>
        {this.state.hideFavoriteList &&
        <FavoriteList
          removeFavorite={this.removeFavorite} favList={this.state.favList}
          update={this.props.update}
        />}
      </div>
    )
  }
}

FavoriteGifs.propTypes = {
  handleFavoriteColor: PropTypes.func,
  update: PropTypes.bool,
};

export default FavoriteGifs;
