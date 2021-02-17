import React, { Component } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      loading: false,
      value: '',
    };
  }

  search = async (val) => {
    this.setState({ loading: true });
    const { data } = await axios.get(
      `https://5c3755177820ff0014d92711.mockapi.io/articles?title=${val}`,
    );
    this.setState({ searchResult: data, loading: false });
    if (this.state.searchResult) {
      this.props.onSearchChange(this.state.searchResult);
    }
  };

  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={this.state.value}
            onChange={this.onChangeHandler}
          />
        </Form>
      </div>
    );
  }
}

export default Search;
