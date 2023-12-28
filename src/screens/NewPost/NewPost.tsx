import {createPost, getPosts} from 'api/AppApi';
import Input from 'components/Input';
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {verticalScale} from 'styles/mixins';
import {useNavigation} from '@react-navigation/native';
import styles from './NewPostStyles';
import AppStore from 'stores/AppStore';
import moment from 'moment';
moment.locale('es');

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [failed, setFailed] = useState(false);
  const date = new Date();
  const navigation = useNavigation();
  const {setPosts} = AppStore();

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleAuthorChange = (text: string) => {
    setAuthor(text);
  };

  const handleContentChange = (text: string) => {
    setContent(text);
  };

  const handleSubmit = async () => {
    if (!title || !author || !content) {
      setFailed(true);
    } else {
      setFailed(false);
      setTitle('');
      setAuthor('');
      setContent('');
      createPost({title, author, content, date: new Date()});
      navigation.canGoBack() && navigation.goBack();
      const data = await getPosts();
      setPosts(data);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          placeholder="Titulo*"
          value={title}
          onChangeText={handleTitleChange}
          error={failed && !title}
        />

        <Input
          placeholder="Autor*"
          value={author}
          onChangeText={handleAuthorChange}
          error={failed && !author}
        />

        <Input
          value={moment(date).format('LL')}
          editable={false}
          customStyle={styles.disabled}
        />

        <Input
          placeholder="Contenido*"
          value={content}
          onChangeText={handleContentChange}
          multiline
          customStyle={{height: verticalScale(250)}}
          error={failed && !content}
        />

        <Button title="Añadir Articulo" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default NewPost;
