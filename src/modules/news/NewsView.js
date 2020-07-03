import React from 'react';
import {Text} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import News from '../../components/News';

import { fonts, colors } from '../../styles';

export default function NewsScreen(props) {
  return (
    <View>
      <Text style={styles.header}>Top News</Text>
      <Text style={styles.header2}>Brooklyn</Text>
      <News/>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    color: "black",
    fontFamily: fonts.primaryBold,
    fontSize: 25,
    paddingTop: 5
  },
  header2: {
    textAlign: "center",
    color: "midnightblue",
    fontFamily: fonts.primaryBold,
    fontSize: 16,
  }
})