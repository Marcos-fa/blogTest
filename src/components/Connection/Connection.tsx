import {Text, View} from 'react-native';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import AppStore from 'stores/AppStore';
import styles from './ConnectionStyles';

const Offline = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sin Conexión</Text>
    </View>
  );
};

const Connection = () => {
  const {isConnected, setIsConnected} = AppStore();

  const handleNetworkChange = (state: NetInfoState) => {
    setIsConnected(state.isConnected || false);
  };

  useEffect(() => {
    const netInfoSubscription = NetInfo.addEventListener(handleNetworkChange);
    return () => {
      netInfoSubscription && netInfoSubscription();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!isConnected) {
    return <Offline />;
  }

  return null;
};

export default Connection;
