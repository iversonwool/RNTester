/**
 * Created by LeeHow on 2018/7/18
 */

import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

class Touchable extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => void alert('TouchableHighlight')}>
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Touchable

/**
 * TouchableHighlight 只有当传入onPress回调之后颜色才会加深
 */
