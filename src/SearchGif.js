import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import './Search.css';

const SearchGif = (props) => {
  const { imgUrl, rate, name } = props;
  return (
    <Tooltip title={`Title: ${name} \n Rating: ${rate}`} placement="top">
      <Card className='card'>
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

  )
};

SearchGif.propTypes = {
  imgUrl: PropTypes.string,
  rate: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default SearchGif;
