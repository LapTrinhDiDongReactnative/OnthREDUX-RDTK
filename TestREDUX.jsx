import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ACTION1, ACTION2, ACTION3, ACTION4 } from './redux/Constants'

const TestREDUX = (props) => {
  const { result, pluss, decrease, multi, divide } = props

  const [number, setNumber] = useState()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
            pluss(number)
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
            decrease(number)
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
            multi(number)
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
            divide(number)
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
        Result: {result}
      </Text>
    </View>
  )
}
const mapStateToProps = (state) => ({
  result: state.result,
})

const mapDispatchToProps = (dispatch) => {
  return {
    pluss: (number) => dispatch({ type: ACTION1, payload: number }),
    decrease: (number) => dispatch({ type: ACTION2, payload: number }),
    multi: (number) => dispatch({ type: ACTION3, payload: number }),
    divide: (number) => dispatch({ type: ACTION4, payload: number }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestREDUX)

const styles = StyleSheet.create({})
