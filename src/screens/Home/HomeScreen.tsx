import React, {useEffect} from 'react';
import AppStore from 'stores/AppStore';
import styles from './HomeStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getPosts} from 'api/AppApi';
import PreviewContainer from 'container/Preview';
import {storeData, getData} from 'utils/asyncStorage';

const getAllPosts = async (setPosts: any) => {
  const posts = await getPosts();
  setPosts(posts);
  await storeData(posts);
};

const getOfflinePosts = async (setPosts: any) => {
  const posts = await getData();
  setPosts(posts);
};

const HomeScreen = () => {
  const {setPosts, isConnected} = AppStore();
  useEffect(() => {
    if (isConnected) {
      getAllPosts(setPosts);
    } else {
      getOfflinePosts(setPosts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <SafeAreaView style={styles.container}>
      <PreviewContainer />
    </SafeAreaView>
  );
};

export default HomeScreen;
