import * as React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import {useSelector} from 'react-redux';
import {loaderSelector} from '../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function SpinnerOverlay() {
  const isLoading = useSelector(loaderSelector);

  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
    </View>
  );
}
