import * as React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {ITodo} from '../store/types';

type ITodoCard = {
  todo: ITodo;
};

export default function TodoCard({todo}: ITodoCard) {
  const {title} = todo;

  return (
    <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#AAA'}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
});
