import Toast from 'react-native-toast-message';

export const RenderError = (error: string) => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: error,
  });
};
