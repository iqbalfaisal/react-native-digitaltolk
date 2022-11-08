import * as React from 'react';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import {RenderError} from '../utils';

export default function LoginScreen({navigation}: any) {
  const [formData, setData] = React.useState({email: '', password: ''});

  const onSignIn = async () => {
    const {email, password} = formData;

    if (email === 'test' && password === '123') {
      navigation.navigate('Home');
    } else {
      RenderError('Account is not valid');
    }
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              onChangeText={value => setData({...formData, email: value})}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              onChangeText={value => setData({...formData, password: value})}
              type="password"
            />
          </FormControl>
          <Button onPress={onSignIn} mt="2" colorScheme="indigo">
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
