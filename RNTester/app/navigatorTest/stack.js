/**
 * Created by LeeHow on 2018/7/16
 */

import { createBottomTabNavigator } from 'react-navigation'
import tabStack from './tab'

const TabStack = createBottomTabNavigator(tabStack.screens, tabStack.options)

const screens = {
  TabStack: { screen: TabStack }

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
