import React from 'react'
import {
  View,
  Image,
  StatusBar
} from 'react-native'
import { Header } from 'react-navigation'
import ImageManager from '../images'
import { Device } from '../utils'

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
      source={ImageManager.nav.img_nav}
      resizeMode={'stretch'}
    />
    <Header {...props} />
  </View>
)

export default NavigationHead
