import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TrendingImage from './TrendingImage';
import './Trending.css';

class TrendingBody extends Component {

  render() {
    return (
      <div className='trending'>
        <h1>Trending Gyphs</h1>
        <div className='root'>
          <GridList cellHeight={160} className='gridList' cols={4}>
            {this.props.trendingGifs.map((gif) => (
              <GridListTile key={gif.id} cols={gif.cols || 1}>
                <TrendingImage
                  imgUrl={gif.images.fixed_height.url}
                  rate={gif.rating}
                  name={gif.title}
                  url={gif.url}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

TrendingBody.propTypes = {
  trendingGifs: PropTypes.array,
};

export default TrendingBody;
