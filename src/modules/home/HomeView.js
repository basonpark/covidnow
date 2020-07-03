import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from '../../components';
import { red } from 'color-name';

const logo = require('../../../assets/images/home/logo.png');
const nihLogo = require('../../../assets/images/home/nihLogo.png');
const mtsinaiLogo = require('../../../assets/images/home/mtsinaiLogo.png');
const mainIcon = require('../../../assets/images/home/mainIcon.png');
const statsIcon = require('../../../assets/images/pages/statsIcon.png');
const infoIcon = require('../../../assets/images/pages/infoIcon.png');
const testingIcon = require('../../../assets/images/pages/testingIcon.png');
const foodIcon = require('../../../assets/images/pages/foodIcon.png');
const workIcon = require('../../../assets/images/pages/workIcon.png');
const housingIcon = require('../../../assets/images/pages/housingIcon.png');

export default function HomeScreen(props,{ isExtended, setIsExtended }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section1}>
          <View style={styles.topRow}>
            <View style={styles.column}>
              <View style={styles.logoRow}>
                <Image
                  resizeMode="contain"
                  source={mtsinaiLogo}
                  style={styles.mtsinaiLogo}
                />
                <Image
                  resizeMode="contain"
                  source={nihLogo}
                  style={styles.nihLogo}
                />
              </View>
              <Image
                resizeMode="contain"
                source={logo}
                style={styles.logo}
              />
              <Text style={styles.description}>
                This tool helps you decide what to do next about COVID-19.
              </Text>
            </View>
            <Image
              resizeMode="contain"
              source={mainIcon}
              style={styles.mainIcon}
            />
          </View>
          <View style={styles.bottomRow}>
            <Button
              rounded
              caption="Start Screening"
              //onPress={() => props.navigation.navigate('Stats')}
              onPress={()=> Linking.openURL('https://covid19screening.health.ny.gov/')}
            />
          </View>
        </View>

        <View style={styles.section2}>
          <View style={styles.row}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF8440', '#FDB056']} style={styles.item}>
              <TouchableOpacity 
                //onPress={() => props.navigation.navigate('Stats')}
                onPress={()=>Linking.openURL('https://www1.nyc.gov/site/doh/covid/covid-19-data-boroughs.page')}
                hitSlop={{top: 20, bottom: 25, left: 20, right: 20}}
                style={styles.touchable}
              >
                <View style={styles.label}>
                  <Image
                    resizeMode="contain"
                    source={statsIcon}
                    style={styles.itemImage}
                  />
                  <Text style={styles.itemText}>Stats</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={statsIcon}
                  style={[styles.backIcon,{marginLeft: 30, height: 60}]}
                />
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3167BC', '#9269BA']} style={styles.item}>
              <TouchableOpacity 
                //onPress={() => props.navigation.navigate('Info')}
                onPress={()=>Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/index.html')}
                hitSlop={{top: 20, bottom: 25, left: 20, right: 20}}
                style={styles.touchable}
              >
                <View style={styles.label}>
                  <Image
                    resizeMode="contain"
                    source={infoIcon}
                    style={styles.itemImage}
                  />
                  <Text style={styles.itemText}>Info</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={infoIcon}
                  style={[styles.backIcon, {marginLeft: 50}]}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.row}>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3A90BE', '#4FCC8F']} style={styles.item}>
              <TouchableOpacity 
                onPress={() => props.navigation.navigate('Testing')}
                hitSlop={{top: 20, bottom: 25, left: 20, right: 20}}
                style={styles.touchable}
              >
                <View style={styles.label}>
                  <Image
                    resizeMode="contain"
                    source={testingIcon}
                    style={styles.itemImage}
                  />
                  <Text style={styles.itemText}>Testing</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={testingIcon}
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            </LinearGradient>
            
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#E26767', '#FFABA3']} style={styles.item}>
              <TouchableOpacity
                //onPress={() => props.navigation.navigate('Food')}
                onPress={()=> Linking.openURL('https://access.nyc.gov/programs/?categories[]=160')}
                hitSlop={{top: 20, bottom: 25, left: 20, right: 20}}
                style={styles.touchable}
              >
                <View style={styles.label}>
                  <Image
                    resizeMode="contain"
                    source={foodIcon}
                    style={styles.itemImage}
                  />
                  <Text style={styles.itemText}>Food</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={foodIcon}
                  style={[styles.backIcon, {marginLeft: 60}]}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.row}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#812D74', '#C76482']} style={styles.item}>
              <TouchableOpacity
                //onPress={() => props.navigation.navigate('Work')}
                onPress={()=> Linking.openURL('https://access.nyc.gov/programs/?categories[]=164')}
                hitSlop={{top: 20, bottom: 25, left: 20, right: 20}}
                style={styles.touchable}
              >
                <View style={styles.label}>
                  <Image
                    resizeMode="contain"
                    source={workIcon}
                    style={styles.itemImage}
                  />
                  <Text style={styles.itemText}>Work</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={workIcon}
                  style={[styles.backIcon, {height: 80}]}
                />
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#364D8B', '#3B96A5']} style={styles.item}>
              <TouchableOpacity 
                //onPress={() => props.navigation.navigate('Housing')}
                onPress={()=> Linking.openURL('https://access.nyc.gov/programs/?categories[]=162')}
                hitSlop={{top: 20, bottom: 25, left: 20, right: 20}}
                style={styles.touchable}
              >
                <View style={styles.label}>
                  <Image
                    resizeMode="contain"
                    source={housingIcon}
                    style={styles.itemImage}
                  />
                  <Text style={styles.itemText}>Housing</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={housingIcon}
                  style={[styles.backIcon, {marginLeft: 30, height: 60}]}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  section1: {
    flex: 3,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 40,
    shadowOffset:{ height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    flexDirection: 'column'
  },
  section2: {
    flex: 4,
    paddingTop: 10,
    marginTop: 10
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start'
  },
  topRow: {
    flex: 3,
    flexDirection: 'row'
  },
  logoRow: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    marginLeft: 5
  },
  bottomRow: {
    flex: 1
  },
  logo: {
    width: 170,
    marginTop: 0,
    position: 'relative',
    top: 17
  },
  mtsinaiLogo: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRightWidth: 1,
    borderRightColor: 'grey'
  },
  nihLogo: {
    width: 45,
    height: 45,
    paddingLeft: 10,
  },
  title: {
    marginTop: 30,
  },
  description: {
    color: '#000000',
    fontSize: 16,
    opacity: 0.8,
    paddingLeft: 10
  },  
  row: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 11
  },
  item: {
    flex: 1,
    height: 100,
    borderRadius: 20,
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 6
  },
  shadow: {
    shadowOffset: {width: 3, height: 6},
    shadowColor: 'black',
    shadowOpacity: 1
  },
  touchable: {
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.2
  },
  label: {
    flexDirection: 'row',
    paddingLeft: 17,
    paddingTop: 15
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primaryBold,
    paddingLeft: 10,
    fontSize: 18
  },
  itemImage: {
    height: 25,
    width: 25
  },
  backIcon: {
    opacity: 0.2,
    height: 80,
    marginLeft: 15
  },
  mainIcon: {
    height: 200,
    width: 170,
    marginTop: 20,
    marginRight: 15,
    marginLeft: 10
  }
});
