import React from 'react';
import {Text} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import ResourceList from '../../components/ResourceList';

import { fonts, colors } from '../../styles';

export default function ContactsScreen(props) {
  return (
    <View>
      <Text style={styles.header}>Brooklyn Resources</Text>
      <ResourceList/>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    color: "#12224B",
    fontFamily: fonts.primaryBold,
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10
  }
})