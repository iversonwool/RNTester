import React, {Component} from 'react'

import {
  Animated,
  Text,
  TouchableOpacity,
  Easing
} from 'react-native'

class ValueXY extends Component {
  // state = {
  //   position: new Animated.ValueXY({
  //     x: 20,
  //     y: 100
  //   }),
  //   opacity: new Animated.Value(0.1),
  //   backgroundColor: new Animated.Value(0.1)
  // }
  constructor(props) {
    super(props)
    this.bgColor = new Animated.Value(0)
  }
  startAnimation = () => {
    // const { position, opacity, backgroundColor } = this.state
    // Animated.stagger(1000, [
    //   Animated.timing(position, {
    //     toValue: {x: 200, y: 200},
    //     duration: 3000,
    //     // easing: Easing.bounce
    //   }),
    //   Animated.timing(opacity, {
    //     toValue: 1,
    //     duration: 2000
    //   }),
    //   Animated.timing(backgroundColor, {
    //     toValue: opacity.interpolate({
    //       inputRange: [.1, 1],
    //       outputRange: ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']
    //     }),
    //     duration: 3000
    //   })
    // ]).start()
    this.bgColor.setValue(0)
    Animated.timing(this.bgColor, {
      toValue: 2,
      duration: 5000,
    }).start(() => this.startAnimation())
  }
  render() {
    // const { position, opacity, backgroundColor } = this.state
    const backgroundColor =  this.bgColor.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['rgba(255,255,255,1)', 'rgba(0,0,0,1)', 'rgba(255,255,255,1)']
      })
    return (
      <Animated.View
        style={[
          {
            backgroundColor,
            width: 50,
            height: 50,
            // transform: position.getTranslateTransform(),
            // opacity
            marginTop: 100,
            marginLeft: 50,
          },
          // position.getLayout(),
        ]}
      >
        <TouchableOpacity onPress={this.startAnimation}>
          <Text>{"Click \n\n Me"}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

export default ValueXY
