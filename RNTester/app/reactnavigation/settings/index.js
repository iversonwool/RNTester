import React from 'react';
import { Button, View, Text } from 'react-native';

class Settings extends React.Component {

  render() {
    //console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

export default Settings
