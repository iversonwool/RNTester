/**
 * Created by LeeHow on 2018/7/17
 */

import React, { Component } from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'

export default class TextInputTester extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    const showKeyboard = () => {
      console.log('ref', this.input)
      this.input.focus()
    }
    return (
      <View>
        <TextInput
          ref={(e) => {
            this.input = e
          }}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'cyan' }} onPress={showKeyboard}>
          <Text>reply</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
