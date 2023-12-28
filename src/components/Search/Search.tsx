import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {IPost, ISearch} from 'interfaces/stores/IAppStore';
import {Colors} from 'styles/index';
import AddButton from 'components/AddBtn';
import {useNavigation} from '@react-navigation/native';
import styles from './SearchStyles';
import AppStore from 'stores/AppStore';

export type FilterType = 'title' | 'author' | 'content';

export enum FilterEnum {
  TITLE = 'title',
  AUTHOR = 'author',
  CONTENT = 'content',
}

const filtersObj = [
  {name: 'Titulo', value: FilterEnum.TITLE},
  {name: 'Autor', value: FilterEnum.AUTHOR},
  {name: 'Contenido', value: FilterEnum.CONTENT},
];

const Search = (props: ISearch) => {
  const {PRIMARY, GRAY_DARK} = Colors;
  const {data, setFilteredData, text, setText} = props;
  const [filter, setFilter] = React.useState<FilterType>(FilterEnum.TITLE);
  const filters = filtersObj;
  const navigation = useNavigation();
  const {isConnected} = AppStore();

  const searchFilter = (txt: string) => {
    if (txt) {
      const newData = data.filter((item: IPost) => {
        const itemData = item[filter]
          ? item[filter].toUpperCase()
          : ''.toUpperCase();
        const textData = txt.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setText(txt);
    } else {
      setFilteredData(data);
      setText(txt);
    }
  };

  useEffect(() => {
    searchFilter(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, filter]);

  const onPress = () => {
    //@ts-ignore
    navigation.navigate('NewPost');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          onChangeText={txt => setText(txt)}
          defaultValue={text}
        />
        <AddButton onPress={() => onPress()} disabled={!isConnected} />
      </View>
      <Text style={styles.filterBy}>Filtrar por:</Text>
      <View style={styles.filters}>
        {filters.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setFilter(item.value)}
              style={[
                styles.filter,
                {borderColor: filter === item.value ? PRIMARY : GRAY_DARK},
              ]}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Search;
