import React, { Component } from 'react';
import { FlatList } from 'react-native';
import TestingBox from './TestingBox';

const TestingSites = require('../modules/categories/testing/TestingSites.json');

class TestingList extends Component {
  state = {
    testingSites: TestingSites
  };

  render() {
    return (
      <FlatList
        data={this.state.testingSites}
        renderItem={({ item }) => <TestingBox testingbox={item} />}
        keyExtractor={item => item.Id}
      />
    );
  }
}

export default TestingList;