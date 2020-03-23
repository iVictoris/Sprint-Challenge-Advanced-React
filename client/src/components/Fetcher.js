import React, { Component } from 'react';
import axios from 'axios';

export const withData = WrappedComponent => config => {
  return class Fetcher extends Component {
    state = {
      items: [],
    };

    async componentDidMount() {
      const { data } = await axios.get(config.url);
      this.setState({
        items: data,
      });
    }

    render() {
      return <WrappedComponent {...this.props} data={this.state.items} />;
    }
  };
};
