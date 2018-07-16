/**
 * Created by LeeHow on 2018/7/16
 */

import React from 'react'
import { createStackNavigator } from 'react-navigation'


import Homepage from './homepage'
import Message from './message'
import Mine from './mine'

const HomepageTab = createStackNavigator({
  Homepage: { screen: Homepage }
})

const MessageTab = createStackNavigator({
  Message: { screen: Message }
})

const MineTab = createStackNavigator({
  Mine: { screen: Mine }
})

const screens = {
  Homepage: { screen: HomepageTab },
  Message: { screen: MessageTab },
  Mine: { screen: MineTab }
}

const options = {
  tabBarOptions: {
    activeTintColor: '#d9b98d',
    labelStyle: {
      fontSize: 12
    }
  }
}

export default {
  screens,
  options,
}

