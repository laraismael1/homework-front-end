import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SearchGif from './SearchGif';
import './Search.css';

class SearchBody extends Component {

  render() {
    {if (this.props.searchedGif.length > 0) {
      return (
        <div className='search'>
          <h1>{`Your search: ${this.props.search}`}</h1>
          <div className='root'>
            <GridList cellHeight={160} className='gridList' cols={4}>
              {this.props.searchedGif.map((gif) => (
                <GridListTile key={gif.id} cols={gif.cols || 1}>
                  <SearchGif
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
      )
    } else { return (null) }};
  }
}

SearchBody.propTypes = {
  searchedGif: PropTypes.array,
};

export default SearchBody;
