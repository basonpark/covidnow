import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';

import { fonts, colors } from '../../../styles';
import { Button } from '../../../components';
import TestingList from '../../../components/TestingList';


export default function TestingScreen(props) {

  return (
      <View>
        <Text style={styles.header}>Testing Sites: Brooklyn</Text>
        <Text style={styles.description}>The following is an updated list of all 88 testing locations available in Brookyln, New York.</Text>
        <TestingList />
      </View>
      
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15,
    color: 'midnightblue',
    fontFamily: fonts.primaryBold
  },
  description: {
    textAlign: 'left',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 15,
    fontSize: 15,
    fontFamily: fonts.primaryRegular,
    color: '#970895'
  }
});

