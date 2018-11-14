import { createStackNavigator } from 'react-navigation'

import mainStack from './mainStackNavigator'

export default createStackNavigator(mainStack.screens, mainStack.config)

// ===========================================================
// const needLoginPages = ['Msg', 'MyApplication', 'GuardianInfo', 'PersonalInfo']
//
// const defaultGetStateForAction = MainStack.router.getStateForAction
// MainStack.router.getStateForAction = (action, state) => {
//   if (needLoginPages.indexOf(action.routeName) !== -1 && !global.isLogin) {
//     this.routes = [
//       ...state.routes,
//       { key: 'id-' + Date.now(), routeName: 'LoginPage' }
//     ]
//     return {
//       ...state,
//       routes: this.routes,
//       index: this.routes.length - 1
//     }
//   }
//   return defaultGetStateForAction(action, state)
// }
// ===========================================================
