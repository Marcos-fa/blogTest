import {getPosts} from 'api/AppApi';
import PostPreview from 'components/PostPreview';
import Search from 'components/Search';
import {IFullPost} from 'interfaces/stores/IAppStore';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  RefreshControl,
  View,
} from 'react-native';
import styles from './PreviewStyles';
import AppStore from 'stores/AppStore';

const PreviewContainer = () => {
  const {posts, isConnected} = AppStore();
  const [filteredData, setFilteredData] = useState<IFullPost[]>(posts);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setFilteredData(posts);
  }, [posts]);

  const onRefresh = async () => {
    setRefreshing(true);
    if (!isConnected) {
      setRefreshing(false);
      return;
    }
    const data = await getPosts();
    if (data.length) {
      setFilteredData(data);
      setText('');
    }
    setRefreshing(false);
  };

  const renderItem = ({item}: {item: IFullPost}) => {
    return (
      <View style={styles.item}>
        <PostPreview {...item} />
      </View>
    );
  };

  return (
    <View>
      <KeyboardAvoidingView behavior="padding">
        <Search
          text={text}
          setText={setText}
          data={posts}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />

        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
          style={styles.flatlist}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default PreviewContainer;
