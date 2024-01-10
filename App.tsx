import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Main} from './src/app/Main';
import {store} from './src/app/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232946',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});

// const HideKeyboard = ({children}: {
//   children: ReactNode
// }): ReactElement => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={globalStyles.border}>
//     {children}
//   </TouchableWithoutFeedback>
// );