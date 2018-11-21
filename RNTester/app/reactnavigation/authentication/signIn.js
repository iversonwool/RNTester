import React from 'react'
import { View, Button, StyleSheet, AsyncStorage, Image } from 'react-native'


class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../util/1200.png')} style={styles.image}/>
        <Button title="Sign in!" onPress={this._signInAsync}/>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100
  }
})

export default SignInScreen
