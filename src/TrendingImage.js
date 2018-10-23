import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';

import './Trending.css';


class TrendingImage extends Component {

  render() {
    const { id, imgUrl, rate, name, url, favorite, handleFavoriteColor } = this.props;
    const gifList = JSON.parse(localStorage.getItem('bardo')) || [];
    const idList = gifList.map(gif => gif.id);
    let color = idList.indexOf(id) === -1 ? 'white' : '#C915F6';
    return (
      <div>
        <Tooltip title={`Title: ${name} \n Rating: ${rate}`} placement="top">
          <Card
            className='card'
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={name}
                className='media'
                height="140"
                image={imgUrl}
                title={name}
              />
            </CardActionArea>
          </Card>
        </Tooltip>
        <Tooltip title={`Favorite this image`} placement="top">
          <input
            type="image"
            className="favorite"
            style={{background: color}}
            src="../favorite.png"
            onClick={(e) => {e.preventDefault(); favorite(id, name, url); handleFavoriteColor()}}
            />
        </Tooltip>
      </div>
    )
  }
};

TrendingImage.propTypes = {
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  rate: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  favorite: PropTypes.func,
  handleFavoriteColor: PropTypes.func,
};

export default TrendingImage;
