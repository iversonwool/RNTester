import { createStackNavigator } from 'react-navigation';
import HomeScreen from './home'

import DetailsScreen from './details'

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




export default createStackNavigator(RouteConfigs, StackNavigatorConfig);

