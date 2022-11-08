import * as React from 'react';
import {Box, Button, FormControl, Input, Stack, TextArea} from 'native-base';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';

import {onCreate, onUpdate, TDispatch} from '../store';

const defaultValues = {
  title: '',
  description: '',
  id: null,
  due_at: null,
};

export default function TodoScreen({route, navigation}: any) {
  const dispatch = useDispatch<TDispatch>();
  const {params} = route;

  const [state, setState] = React.useState(
    params?.todo ? params?.todo : defaultValues,
  );

  const {title, description, id, due_at} = state;

  const updateField = (field: any) => {
    setState((prev: any) => ({...prev, ...field}));
  };

  const onTextChange = (text: string | Date, type: string) => {
    updateField({[type]: text});
  };

  const onPressCancel = () => {
    setState(defaultValues);
    navigation.goBack();
  };

  const onCreateButton = () => {
    dispatch(onCreate({title, description, id, due_at}));
    onPressCancel();
  };

  const onUpdateButton = () => {
    dispatch(onUpdate({title, description, id, due_at}));
    onPressCancel();
  };

  return (
    <Box my="2">
      <Box w="100%">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Title</FormControl.Label>
            <Input
              onChangeText={value => onTextChange(value, 'title')}
              type="text"
              value={title}
              placeholder="title"
            />
          </Stack>
          <Stack mx="4">
            <FormControl.Label>Message</FormControl.Label>

            <TextArea
              onChangeText={value => onTextChange(value, 'description')}
              h={20}
              value={description}
              placeholder="Message"
              autoCompleteType="disabled"
            />
          </Stack>
        </FormControl>

        <DatePicker
          date={due_at}
          mode="datetime"
          onDateChange={value => onTextChange(value, 'due_at')}
        />

        <Stack
          mx="4"
          my="4"
          direction={{
            md: 'row',
          }}
          space={4}>
          <Button onPress={() => (id ? onUpdateButton() : onCreateButton())}>
            {id ? 'Update' : 'Create'}
          </Button>
          <Button onPress={onPressCancel}>Cancel</Button>
        </Stack>
      </Box>
    </Box>
  );
}
