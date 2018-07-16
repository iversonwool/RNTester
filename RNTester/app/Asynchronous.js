import React, { Component } from 'react'
import {
  Button,
  View,
  Text
} from 'react-native'

class AsynchronousTest extends Component {
  state = {
    counter: 0
  }
  onClick = () => {
    this.setState((prevState, nextProps) => ({
      counter: prevState.counter + 1
    }))
    this.setState((prevState, nextProps) => ({
      counter: prevState.counter + 1
    }))
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // alert(this.state.counter)
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // alert(this.state.counter)
  }
  render() {
    const { counter } = this.state
    return (
      <View>
        <Text style={{marginTop: 50}}>{counter}</Text>
        <Button onPress={this.onClick} title="click me" />
      </View>

    )
  }
}

export default AsynchronousTest