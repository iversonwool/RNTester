import AppScreen from './app'
import AuthLoadingScreen from './authLoading'
import SignInScreen from './signIn'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import OtherScreen from '../home/home'

const AppStack = createStackNavigator({ Home: AppScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

// export default SwitchStack
