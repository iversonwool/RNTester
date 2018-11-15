import React from 'react';
import { Button, View, Text } from 'react-native';

class Profile extends React.Component {

  componentDidMount() {
    const { navigation } = this.props
    navigation.addListener('willFocus', (v) => {
      console.log(v)
    })
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
      </View>
    );
  }
}

export default Profile
