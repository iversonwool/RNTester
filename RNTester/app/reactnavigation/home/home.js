import React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    // headerStyle: { backgroundColor: '#f4511e' },
    // headerTintColor: '#fff',
    // headerTitleStyle: { fontWeight: 'bold' }
    headerRight: (
      <Button
        onPress={navigation.getParam('increaseCount', ()=>{})}
        title="+1"
        color="#fff"
      />
    )
  })

  state = {
    count: 0
  }

  componentDidMount() {
    this.props.navigation.setParams({
      increaseCount: this.increaseCount
    })
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    //console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: '9527',
            otherParam: 'Hello, Kitty!'
          })}
        />
        <Button
          onPress={() => this.props.navigation.navigate('MyModal')}
          title="show modal"
          //color="#fff"
        />
      </View>
    );
  }
}

export default HomeScreen
