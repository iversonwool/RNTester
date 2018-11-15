
import React from 'react';
import { Button, View, Text } from 'react-native';


class DetailsScreen extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="navigate to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="push to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="navigate to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Pop to top"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export default DetailsScreen