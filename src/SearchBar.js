import React, { Component } from 'react';
import './Search.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  resetSearch = () => {
    this.setState({
      search: ''
    });
  }

  render() {
    return (
      <div className='searchContainer'>
        <input type="text" value={this.state.search} name="search" className='searchInput' onChange={(e) => this.handleChange(e)}/>
        <button className='searchButton' onClick={(e) => { this.props.handleSearch(e.currentTarget.previousElementSibling.value), this.resetSearch()}}>
          SEARCH
        </button>
      </div>
    )
  }
};

export default SearchBar;
