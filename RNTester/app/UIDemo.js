import React, { Component } from 'react'
import {
  ActivityIndicator,
  View,
  Button,
  Picker
} from 'react-native'

class UIDemo extends Component {
  buttonPress = () => alert('press')
  renderSubview = (type) => {
    let subview
    switch (type) {
      case 'ActivityIndicator':
        subview = <ActivityIndicator
          size={'large'}
          color={'red'}
        />
        break
      case 'Button':
        subview = <Button
          onPress={this.buttonPress}
          title="Press Me"
          color={'red'}
          accessibilityLabel="See an informative alert"
        />
          break
      case 'Picker':
        subview = <Picker selectedValue={'iOS'}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="iOS" value="iOS" />
          <Picker.Item label="Android" value="Android" />
        </Picker>
        break
      default:
        subview = null
        break
    }
    return subview
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {this.renderSubview('Picker')}
      </View>
    )
  }
}

export default UIDemo