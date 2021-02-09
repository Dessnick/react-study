import React, { Component } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Search extends Component {
  state = {
    searchResult: [],
    loading: false,
    value: '',
  };

  search = async (val) => {
    this.setState({ loading: true });
    const res = await axios(`https://5c3755177820ff0014d92711.mockapi.io/posts?title=${val}`);
    const searchResult = await res.data;

    this.setState({ searchResult, loading: false });
  };

  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  // get renderNews() {
  //   let news = <h1>There's no news</h1>;
  //   if (this.state.searchResult) {
  //     news = <HomePage news={this.state.searchResult} />;
  //   }

  //   return news;
  // }

  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={this.state.value}
            onChange={(event) => this.onChangeHandler(event)}
          />
        </Form>
        {/* {this.renderNews} */}
      </div>
    );
  }
}

export default Search;
