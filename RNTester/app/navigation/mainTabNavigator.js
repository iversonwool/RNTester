import React from 'react'
import {
  createStackNavigator
} from 'react-navigation'

import { Image, Platform, View } from 'react-native'
import HomePage from '../navigatorTest/homepage'
import PersonalPage from "../navigatorTest/mine";
import MsgPage from "../navigatorTest/message";

import NavigationHead from './NavigationHead'
import Device from "./Device"

function createTabIcon(icon, hicon) {
  return ({ focused: focused, /*tintColor: tintColor*/ }) => {
    const cicon = focused ? hicon : icon
    return <Image source={cicon}/>
  }
}

const navigationOps = {
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
      headerLeft: Platform.OS === 'android' ? <View/> : null,
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

const Personal = (() => createStackNavigator({
  PersonalPage: {
    screen: PersonalPage,
    navigationOptions: {
      title: '个人中心'
    }
  }
}, navigationOps))()


// 消息提醒 Stack Navigator
const Message = createStackNavigator({
  MsgPage: { screen: MsgPage }
}, navigationOps)

const screens = {
  Home: {
    navigationOptions: {
      title: '首页',
    },
    screen: HomePage,
  },
  Msg: {
    navigationOptions: {
      // tabBarIcon: createTabIcon(ImageManager.tabbar.icon_msg_default, ImageManager.tabbar.icon_msg_selected),
      title: '消息',
    },
    screen: Message
  },
  Personal: {
    navigationOptions: {
      // tabBarIcon: createTabIcon(ImageManager.tabbar.icon_me_default, ImageManager.tabbar.icon_me_selected),
      title: '个人中心',
    },
    screen: Personal
  }
}

const config = {
  tabBarOptions: {
    activeTintColor: '#d9b98d',
    labelStyle: {
      fontSize: 12
    }
  }
}

export default {
  screens,
  config,
}
