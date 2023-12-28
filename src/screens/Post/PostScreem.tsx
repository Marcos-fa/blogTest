import React from 'react';
import {View, Text} from 'react-native';
import AppStore from 'stores/AppStore';
import styles from './PostStyles';
import moment from 'moment';
moment.locale('es');

const PostScreen = () => {
  const {postSelected} = AppStore();
  const date = moment(postSelected.createdAt).format('LL');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{postSelected.title}</Text>
      <Text style={styles.author}>{date}</Text>
      <Text style={styles.content}>{postSelected.content}</Text>
      <Text style={styles.author}>{'Autor: ' + postSelected.author}</Text>
    </View>
  );
};

export default PostScreen;
