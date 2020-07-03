import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { fonts, colors } from '../styles';

class ContactBox extends Component {
  render() {
    const {
      id,
      name,
      phoneNum
    } = this.props.contactbox;

    return (
        <View style={styles.box}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phoneNum}>{phoneNum}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 15,
    marginTop: 5,
    marginLeft: 10
  },
  name: {
    textAlign: 'center',
    color: 'midnightblue',
    fontSize: 14,
    fontFamily: fonts.primaryBold
  },
  phoneNum: {
    textAlign: 'center',
    color: '#12224B',
    fontSize: 16
  }
})

export default ContactBox;