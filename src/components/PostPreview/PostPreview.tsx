import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IFullPost} from 'interfaces/stores/IAppStore';
import AppStore from 'stores/AppStore';
import {useNavigation} from '@react-navigation/native';
import styles from './PreviewStyles';
import moment from 'moment';
moment.locale('es');

const PostPreview = (props: IFullPost) => {
  const {title, author, content, createdAt} = props;
  const date = moment(createdAt).format('DD/MM/YYYY');
  const {setPostSelected} = AppStore();
  const PreviewContent =
    content.length > 70 ? content.substring(0, 70) + '...' : content;

  const navigation = useNavigation();

  const selectPost = () => {
    setPostSelected(props);
    //@ts-ignore
    navigation.navigate('Post');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => selectPost()}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.content}>{PreviewContent}</Text>
    </TouchableOpacity>
  );
};

export default PostPreview;
