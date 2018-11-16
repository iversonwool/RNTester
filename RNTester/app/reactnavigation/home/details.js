import React from 'react';
import { Button, View, Text } from 'react-native';


class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions, screenProps }) => {
    //the navigationOptions passed from top of stack
    console.log('navigationOptions => ', navigationOptions)
    console.log('screenProps => ', screenProps)


    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),

      // Overriding shared navigationOptions
      // headerStyle: { backgroundColor: '#123456' },
      // headerTintColor: '#cde',
      // headerTitleStyle: { fontWeight: 'bold' }

      // Replacing the title with a custom component

      //headerTitle: <CustomComponent />,
    }
  }

  render() {
    //console.log(this.props)
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId', 'NO-ID')
    const otherParam = navigation.getParam('otherParam', 'some default value')

    const { params } = navigation.state
    console.log('params => ', params)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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
          title="pop"
          onPress={() => this.props.navigation.pop()}
        />
        <Button
          title="Pop to top"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
      </View>
    );
  }
}

export default DetailsScreen