import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { fonts, colors } from '../styles';

class TestingBox extends Component {
  render() {
    const {
      name,
      address,
      zipcode,
      phoneNum,
      url
    } = this.props.testingbox;

    return (
        <TouchableOpacity
          onPress={()=>Linking.openURL(url)}
        >
          <View style={styles.box}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.location}>{address} {zipcode}</Text>
            <Text style={styles.phoneNum}>{phoneNum}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 15,
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  name: {
    textAlign: 'center',
    color: 'midnightblue',
    fontSize: 16,
    fontFamily: fonts.primaryBold
  },
  location: {
    marginTop: 5,
    textAlign: 'center',
    color: '#12224B',
    fontSize: 14,
    fontFamily: fonts.primaryRegular
  },
  phoneNum: {
    marginTop: 3,
    textAlign: 'center',
    color: '#12224B',
    fontSize: 16,
    fontFamily: fonts.primarySemiBold
  }
})

export default TestingBox;