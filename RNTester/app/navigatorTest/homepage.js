/**
 * Created by LeeHow on 2018/7/16
 */
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Homepage extends Component {

  render() {
    const { navigation } = this.props
    const onPress = route => void navigation.navigate(route)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.touch} onPress={() => void onPress('TextInputTester')}>
          <Text>TextInputTester</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => void onPress('TouchableTester')}>
          <Text>TouchableTester</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  touch: {
    backgroundColor: '#ff5678',
    padding: 5,
    margin: 5
  }
})
