/**
 * Created by LeeHow on 16/05/2017.
 */
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  NativeModules,
} from 'react-native'

import NativeView from './NativeView'

export default class CustomView extends Component {
  _getName = (msg) => {alert(msg.toString())}
  _renderNativeView() {
    return <NativeView
      ref={ref => this.nativeView = ref}
      onClicked={this._getName}
      style={styles.nativeViewStyle}
    />
  }
  _calenderEvent = () => {
    NativeModules.CalendarManager.addEvent('leehow', 'hello')
  }
  render() {
    return (
      <View style={styles.bgView}>
        {this._renderNativeView()}
        <Button
          onPress={this._calenderEvent}
          title={"RNCallNativeMethod"}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    width: 375,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'cyan'
  },
  nativeViewStyle: {
    marginTop: 100,
    width: 300,
    height: 400,
    backgroundColor: 'magenta'
  }
})