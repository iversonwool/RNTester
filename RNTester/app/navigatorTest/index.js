/**
 * Created by LeeHow on 2018/7/16
 */

import stack from './stack'
import { createStackNavigator } from 'react-navigation'

const Navigator = createStackNavigator(stack.screens, stack.options)
export default Navigator