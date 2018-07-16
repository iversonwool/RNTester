/**
 * Created by LeeHow on 27/04/2017.
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native'
// import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
// import Loading from './Loading'
// import Toast from 'react-native-root-toast'

const { width } = Dimensions.get('window')

export default class CustomView extends Component {

  // showLoading = () => {
  //   Loading.show('loading')
  //   // Toast.show('loading')
  // }
  render() {
    return (

      <View
        style={{
          height: 300,
          backgroundColor: '#f34',
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}/>
        <View style={{ flex: 2, backgroundColor: 'skyblue' }}/>
        <View
          style={{


            flex: 3, backgroundColor: 'steelblue',
          }}
        />
        {/*<TouchableOpacity onPress={this.showLoading}><Text>click</Text></TouchableOpacity>*/}
      </View>

    )
  }
}


/**
 * <View style={styles.bgView}>
 <View style={styles.demoView}><Text>1</Text></View>
 <View style={styles.demoView}><Text>2</Text></View>
 <View style={styles.demoView}><Text>3</Text></View>
 <View style={styles.demoView}><Text>4</Text></View>
 <View style={styles.demoView}><Text>5</Text></View>
 <View style={styles.demoView}><Text>6</Text></View>
 </View>
 */

/**
 * <ScrollableTabView
 initialPage={0}
 tabBarUnderlineStyle={{ backgroundColor: 'white', height: 3 }}
 renderTabBar={() => <ScrollableTabBar
            style={{ marginTop: 20, height: 45, backgroundColor: 'green' }}
            activeTextColor={'white'}
            inactiveTextColor={'white'}
            tabStyle={styles.tabStyle}
            textStyle={{ fontSize: 17 }}
            tabsContainerStyle={styles.tabsContainerStyle}
            backgroundColor={'transparent'}
          />}
 >
 <View tabLabel={'积分'} style={{ flex: 1, backgroundColor: 'red' }}>

 </View>
 <View tabLabel={'徽章'} style={{ flex: 1, backgroundColor: 'yellow' }}>

 </View>
 </ScrollableTabView>
 */

const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    backgroundColor: '#654321',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap'
  },
  demoView: {
    width: width / 4,
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 10,
    borderBottomColor: 'red',
    borderLeftColor: 'blue',
    borderLeftWidth: 20,
    borderTopColor: 'cyan',
    borderTopWidth: 30,
    borderRightColor: 'magenta',
    borderRightWidth: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
