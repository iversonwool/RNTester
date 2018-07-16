/**
 * Created by LeeHow on 04/05/2017.
 */




import React, {PropTypes} from 'react'
import {
  View,
  requireNativeComponent,
  NativeModules,
  findNodeHandle
} from 'react-native'

const RCTNativeView = requireNativeComponent('RCTNativeView', NativeView)
const NativeViewManager = NativeModules.RCTNativeViewManager

class NativeView extends React.Component {
  static propTypes = {
    ...View.propTypes,


    xxx: PropTypes.func

  }
  xxx() {
    NativeViewManager.xxx(findNodeHandle(this), {'hhh':'jjj'})
  }
  render() {
    return <RCTNativeView {...this.props} />
  }
}

export default NativeView