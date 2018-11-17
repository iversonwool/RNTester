import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from './reactnavigation/home/home'
import SettingsScreen from './reactnavigation/settings'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  /* any other route you want to render under the tab bar */
});


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

const TabStack = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
})

// this way is recommended

/**
 * ******************************************************
 * 注意 navigationOptions 里面的header属性 一定要设置为null **
 * ******************************************************
 */
export default createStackNavigator({
  Main: { screen: TabStack }
}, {
  initialRouteName: 'Main',
  navigationOptions: {
    header: null
  }
})
