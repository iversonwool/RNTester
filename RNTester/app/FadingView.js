import { Animated, Easing } from "react-native";
import React from "react";

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }


  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,               // Make it take a while
        // easing: Easing.back()
      }
    ).start(({finished}) => console.log('finish', finished));                        // Starts the animation
  }
  


  render() {
    let { fadeAnim } = this.state;
    // fadeAnim.setValue()

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
          transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }],
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeInView

// In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children.

