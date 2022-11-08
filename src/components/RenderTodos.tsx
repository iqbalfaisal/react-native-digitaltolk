import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';

import TodoCard from './TodoCard';
import {ITodo, onDelete, TDispatch} from '../store';

type IRenderTodos = {
  todos: ITodo[];
};

export default function RenderTodos({todos}: IRenderTodos) {
  const dispatch = useDispatch<TDispatch>();
  const navigation = useNavigation();

  const closeRow = (rowMap: any, id: number) => {
    if (rowMap[id]) {
      rowMap[id].closeRow();
    }
  };

  const editRow = (rowMap: any, id: number) => {
    closeRow(rowMap, id);
    navigation.navigate('Todo' as never, {todo: todos[id]} as never);
  };

  const deleteRow = (rowMap: any, id: number) => {
    closeRow(rowMap, id);
    dispatch(onDelete(todos[id].id));
  };

  const renderHiddenItem = (data: any, rowMap: any) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => editRow(rowMap, data.item.id)}>
        <Text style={styles.backTextWhite}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.id)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={todos}
      renderItem={({item}) => <TodoCard todo={item} />}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 4,
  },

  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});
