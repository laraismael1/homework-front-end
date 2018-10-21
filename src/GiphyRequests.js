import axios from 'axios';

const giphyModules = {
  getTrending: (trendingGiphys) => {
    axios.get('http://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        limit: 24
      }
    })
    .then((data) => trendingGiphys(data))
    .catch((err) => console.log(err));
  },
  getSearch: (query, searchGif) => {
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: query,
        limit: 8
      }
    })
    .then((data) => searchGif(data))
    .catch((err) => console.log(err));
  }
};



module.exports = giphyModules;
