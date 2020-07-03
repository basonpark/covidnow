import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { getNews } from '../modules/news/NewsApi';
import Article from './Article';

class News extends Component {
  state = {
    articles: [],
    refreshing: true
  };

  componentDidMount = () => {
    this.fetchNews();
  };

  fetchNews = () => {
    getNews()
      .then(articles => {
        this.setState({ articles, refreshing: false });
      })
      .catch(() => this.setState({ refreshing: false }));
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => this.fetchNews());
  };

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
      />
    );
  }
}

export default News;