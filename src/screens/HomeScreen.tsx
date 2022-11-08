import * as React from 'react';
import {Box, Fab, Icon} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

import {getTasks, TDispatch, todosSelector} from '../store';
import {RenderTodos} from '../components';

export default function HomeScreen({navigation}: any) {
  const dispatch = useDispatch<TDispatch>();
  const todos = useSelector(todosSelector);

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    dispatch(getTasks());
  };

  const onNavigate = async () => {
    navigation.navigate('Todo');
  };

  return (
    <Box flex={1} bg="warmGray.50">
      <RenderTodos todos={todos} />
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<Icon color="white" name="plus" size="sm" />}
        onPress={onNavigate}
      />
    </Box>
  );
}
