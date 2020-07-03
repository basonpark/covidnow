import React, { Component } from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

class Article extends Component {
  render() {
    const time = moment(publishedAt || moment.now()).fromNow();
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const defaultImg = 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <TouchableOpacity
        onPress={()=>Linking.openURL(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={{
            marginHorizontal: 5,
            textShadowColor: '#00000f',
            textShadowOffset: { width: 3, height: 3 },
            textShadowRadius: 3
          }}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description || 'Read more...'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text
              style={{
                margin: 5,
                fontStyle: 'italic',
                color: '#b2bec3',
                fontSize: 10
              }}
            >
              {source.name.toUpperCase()}
            </Text>
            <Text
              style={{
                margin: 5,
                fontStyle: 'italic',
                color: '#b2bec3',
                fontSize: 10
              }}
            >
              {time}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default Article;