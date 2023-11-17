import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeState } from './rdtk/reducer'

const TestRDTK = () => {
  const stateR = useSelector((state) => state.theme.stateR)

  const dispatch = useDispatch()

  const [number, setNumber] = useState()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Bài REDUX TOOLKIT</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 300,
          marginTop: 20,
          marginBottom: 20,
        }}
        onChangeText={(text) => setNumber(parseInt(text))}
      ></TextInput>
      <View
        style={{
          width: 350,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#8fcbfc',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(changeState(stateR + number))
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#fc5858',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(changeState(stateR - number))
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#8ffcd4',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(changeState(stateR * number))
          }}
        >
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#61c94a',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(changeState(stateR / number))
          }}
        >
          <Text>/</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 20,
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        Result: {stateR}
      </Text>
    </View>
  )
}

export default TestRDTK

const styles = StyleSheet.create({})
