import AsyncStorage from '@react-native-async-storage/async-storage';
import {IFullPost} from 'interfaces/stores/IAppStore';

export const storeData = async (value: IFullPost[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('posts', jsonValue);
  } catch (e: any) {
    console.log('error in storeData: ', e.message);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('posts');
    if (value !== null) {
      // value previously stored
      return JSON.parse(value) as IFullPost[];
    }
    return [] as IFullPost[];
  } catch (e: any) {
    console.log('error in getData: ', e.message);
    return [] as IFullPost[];
  }
};
