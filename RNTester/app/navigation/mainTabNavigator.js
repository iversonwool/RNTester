import React from 'react'
import {
  createStackNavigator
} from 'react-navigation'

import ImageManager from "../images";
import { Image, Platform, TouchableOpacity,View,Text } from 'react-native'
import HomePage from '../screens/homePage'
import PersonalPage from "../screens/personalPage";
import HealthManagerPage from "../screens/healthManagerPage";
import MsgPage from "../screens/msgPage";

import NavigationHead from './NavigationHead'
import { Device } from "../utils"

function createTabIcon(icon, hicon) {
  return ({focused: focused, /*tintColor: tintColor*/}) => {
    const cicon = focused ? hicon : icon
    return <Image source={cicon} />
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
      headerLeft: Platform.OS === 'android' ? <View /> : null,
      headerRight: Platform.OS === 'android' ? <View /> : null,
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

const HealthManager = createStackNavigator({
  PersonalPage: {
    screen: HealthManagerPage,
    navigationOptions: {
      title: '健康管理'
    }
  }
}, navigationOps)

// 消息提醒 Stack Navigator
const Message = createStackNavigator({
  MsgPage: { screen: MsgPage }
}, navigationOps)

const screens = {
  Home: {
    navigationOptions: {
      title: '首页',
      tabBarIcon: createTabIcon(ImageManager.tabbar.icon_home_default, ImageManager.tabbar.icon_home_selected),
    },
    screen: HomePage,
  },
  Msg: {
    navigationOptions: {
      tabBarIcon: createTabIcon(ImageManager.tabbar.icon_msg_default, ImageManager.tabbar.icon_msg_selected),
      title: '消息',
    },
    screen: Message
  },
  HealthManager: {
    navigationOptions: {
      tabBarIcon: createTabIcon(ImageManager.tabbar.icon_health_default, ImageManager.tabbar.icon_health_selected),
      title: '健康管理'
    },
    screen: HealthManager
  },
  Personal:{
    navigationOptions: {
      tabBarIcon: createTabIcon(ImageManager.tabbar.icon_me_default, ImageManager.tabbar.icon_me_selected),
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