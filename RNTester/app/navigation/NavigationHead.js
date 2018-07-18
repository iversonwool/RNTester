import React from 'react'
import {
  View,
  Image,
} from 'react-native'
import { Header } from 'react-navigation'
import Device from './Device'

const NavigationHead = props => (
  <View style={{ backgroundColor: 'transparent' }}>
    <Image
      style={{
        position: 'absolute',
        width: Device.width,
        height: Device.navBarHeight,
        left: 0,
        top: 0
      }}
      source={require('./nav/img_nav.png')}
      resizeMode={'stretch'}
    />
    <Header {...props} />
  </View>
)

export default NavigationHead
