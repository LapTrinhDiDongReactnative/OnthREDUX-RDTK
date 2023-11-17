import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Provider } from 'react-redux'
// import store from './redux/store'

import store from './rdtk/store'
import TestRDTK from './TestRDTK'
import TestREDUX from './TestREDUX'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="TestRDTK"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TestRDTK" component={TestRDTK} />
          <Stack.Screen name="TestREDUX" component={TestREDUX} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
