import React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    // headerStyle: { backgroundColor: '#f4511e' },
    // headerTintColor: '#fff',
    // headerTitleStyle: { fontWeight: 'bold' }
  }

  render() {
    //console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: '9527',
            otherParam: 'Hello, Kitty!'
          })}
        />
      </View>
    );
  }
}

export default HomeScreen
