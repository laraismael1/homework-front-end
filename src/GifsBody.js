import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GifsList from './GifsList';
import './Giphys.css';

class GifsBody extends Component {

  render() {
    return (
      this.props.gifsList.length > 0 ?
        <div className='gifsBody'>
          {this.props.search
            ? <h1>{`Your search: ${this.props.search}`}</h1>
            : <h1>Trending Gyphs</h1>
          }
          <div className='root'>
            <GridList cellHeight={160} className='gridList' cols={4}>
              {this.props.gifsList.map((gif) => (
                <GridListTile key={gif.id} cols={1}>
                  <GifsList
                    handleFavoriteColor={this.props.handleFavoriteColor}
                    favorite={this.props.favorite}
                    id={gif.id}
                    imgUrl={gif.images.fixed_height.url}
                    rate={gif.rating}
                    name={gif.title}
                    url={gif.embed_url}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      : null
    );
  }
}

GifsBody.propTypes = {
  gifsList: PropTypes.array,
  handleFavoriteColor: PropTypes.func,
  favorite: PropTypes.func,
};

export default GifsBody;
