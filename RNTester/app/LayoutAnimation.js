/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  TouchableHighlight,
  ToastAndroid,
  Platform,
  UIManager
} from 'react-native'
import _ from 'lodash'

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const CustomLayoutAnimation = {
  duration: 800,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};


class LayoutAnimationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: [],
      num: 0,
    }
    // Enable LayoutAnimation under Android
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentDidMount() {
    // do some operation

    const arr = ['a', 'b', 'c', 'd', 'e']
    const newArr = _.chunk(arr, 2)
    // _.compact(arr)
    console.log(newArr)
  }

  componentWillUpdate() {
    console.log('componentWillUpdate...');
    LayoutAnimation.spring();
    //或者可以使用如下的自定义的动画效果
    // LayoutAnimation.configureNext(CustomLayoutAnimation);
  }

  _onPressAddView() {
    this.setState({ num: Number.parseInt(this.state.num) + 1 });
  }

  _onPressRemoveView() {
    this.setState({ num: Number.parseInt(this.state.num) - 1 });
  }

  _renderAddedView(i) {
    return (
      <View key={i} style={styles.view}>
        <Text style={{ color: '#fff' }}>{i}</Text>
      </View>
    );
  }

  render() {
    this.state.views.length = 0;
    for (let i = 0; i < this.state.num; i++) {
      this.state.views.push(this._renderAddedView(i));
    }
    return (
      <View style={{ marginTop: 20, margin: 10 }}>
        <Text style={styles.welcome}>
          LayoutAnimation实例演示
        </Text>
        <CustomButton text="添加View" onPress={this._onPressAddView.bind(this)}/>
        <CustomButton text="删除View" onPress={this._onPressRemoveView.bind(this)}/>
        <View style={styles.viewContainer}>
          {this.state.views}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin: 5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LayoutAnimationDemo
