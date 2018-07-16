import React from 'react';
import { Text, View, Button } from 'react-native';
import FadeInView from './FadingView'
import {pi, sum, streamLatestVersion, streamV1, streamV2} from './TestExport'

import  './TestExport2'
// import sss from 'util'

// exp(pi)

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  state = {
    visible: false
  }
  render() {


    streamLatestVersion()
    streamV2()
    // console.log(sss.xxx)


    const { visible } = this.state
    const startAnimation = () => {
      this.setState({
        visible: true
      })
    }
    const reset = () => {
      this.setState({
        visible: false
      })
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {visible && (
          <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
          </FadeInView>
        )}

        <Button
          onPress={startAnimation}
          title="start animation"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={reset}
          title="reset"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    )
  }
}

