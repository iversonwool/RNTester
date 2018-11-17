import React from 'react';
import { Button, View, Text } from 'react-native';

import FocusStateLabel from '../api/withNavigationFocus'

class Profile extends React.Component {

  componentDidMount() {
    const { navigation } = this.props
    this.didBlurSubscription = navigation.addListener('willFocus', (v) => {
      console.log('willFocus')
    })
  }

  componentWillUnmount() {
    this.didBlurSubscription.remove()
  }

  render() {
    // console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Back"
          onPress={() => this.props.navigation.pop()}
        />
        <Button
          title="go to navigation events"
          onPress={() => this.props.navigation.push('NavigationEvents')}
        />
        <Button
          title="go to details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <FocusStateLabel/>
      </View>
    );
  }
}

export default Profile
