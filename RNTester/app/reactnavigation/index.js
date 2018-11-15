import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './home/home'
import DetailsScreen from './home/details'

import SettingsScreen from './settings'
import ProfileScreen from './settings/profile'

const RouteConfigs = {
  // Home: {
  //   screen: HomeScreen
  // },
  //shorthand
  Details: DetailsScreen,
  Home: HomeScreen,

}
const StackNavigatorConfig = {
  initialRouteName: 'Home'
}

const HomeStack = createStackNavigator(RouteConfigs, StackNavigatorConfig)

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen,
})

// the createStackNavigator function returns a React component,

// const RootStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });
//
// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }



// export default createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
})
