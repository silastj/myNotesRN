import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './src/store'
import MainStack from './src/stacks/MainStack';


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
             <MainStack/>    
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
  },
});
