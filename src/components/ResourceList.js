import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ContactBox from './ContactBox';

const BrooklynCBOs = require('../modules/contacts/BrooklynCBOs.json');

class ResourceList extends Component {
  state = {
    contacts: BrooklynCBOs
  };

  render() {
    return (
      <FlatList
        data={this.state.contacts}
        renderItem={({ item }) => <ContactBox contactbox={item} />}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default ResourceList;