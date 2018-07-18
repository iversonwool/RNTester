import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import FlatListDemo from './FlatListDemo'
import A from './app/App'
// import
import Navigator from './app/navigatorTest'

import MainStack from './app/navigation'


// 忽略指定黄色警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', ''])


AppRegistry.registerComponent('RNTester', () => MainStack)
