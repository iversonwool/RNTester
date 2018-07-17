/**
 * Created by LeeHow on 2018/7/16
 */

import { createBottomTabNavigator } from 'react-navigation'
import tabStack from './tab'

const TabStack = createBottomTabNavigator(tabStack.screens, tabStack.options)

import TextInputTester from '../UITester/TextInputTester'

const screens = {
  TabStack: { screen: TabStack },
  TextInputTester: { screen: TextInputTester }
}

const options = {
  initialRouteName: 'TabStack',
  navigationOptions: {
    header: null
  }
}

export default {
  screens,
  options
}
