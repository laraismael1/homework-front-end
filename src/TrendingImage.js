import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';


import './Trending.css';


class TrendingImage extends Component {
  state = {
    favColor: 'white'
  }
  toggleFavoriteColor = () => {
    this.setState({
      favColor: '#C915F6'
    })
  }

  render() {
    const { id, imgUrl, rate, name, url, favorite } = this.props;
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
            style={{background: this.state.favColor}}
            src="../favorite.png"
            onClick={(e) => {e.preventDefault(); favorite(id, name, url); this.toggleFavoriteColor()}}
            />
        </Tooltip>
      </div>
    )
  }
};

TrendingImage.propTypes = {
  imgUrl: PropTypes.string,
  rate: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default TrendingImage;
