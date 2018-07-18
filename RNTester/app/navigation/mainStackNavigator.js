import React from 'react'
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  Platform
} from 'react-native'

import { createBottomTabNavigator } from 'react-navigation'
import tabStack from "./mainTabNavigator"
import NavigationHead from './NavigationHead'
import Device from './Device'

const TabStack = createBottomTabNavigator(tabStack.screens, tabStack.config)

import TextInputTester from '../UITester/TextInputTester'
import TouchableTester from '../UITester/Touchable'

export const screens = {
  Home: {
    screen: TabStack,
    navigationOptions: {
      header: null
    },
  },
  TextInputTester: { screen: TextInputTester },
  TouchableTester: { screen: TouchableTester }
}

const config = {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => {
    return {
      header: props => <NavigationHead {...props} />,
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        marginTop: Platform.OS === 'android' ? Device.statusBarHeight : 0,
        height: Device.navBarHeight - Device.statusBarHeight
      },
      headerBackTitle: null,
      headerLeft: (<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => {
          navigation.goBack()
        }}>
          <Image source={require('./nav/icon_back.png')} style={{ marginLeft: 10 }}/>
          <Text style={{ fontSize: Device.scale(16), color: '#595550', marginLeft: Device.scale(6) }}>返回</Text>
        </TouchableOpacity>
      ),
      headerRight: Platform.OS === 'android' ? <View/> : null,
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#595550',
        fontSize: Device.scale(17)
      }
    }
  }
}

export default {
  screens,
  config,
}
