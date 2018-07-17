/**
 * Created by LeeHow on 2018/7/17
 */

import React, { Component } from 'react'
import { TextInput } from 'react-native'

export default class TextInputTester extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
      />
    )
  }
}
