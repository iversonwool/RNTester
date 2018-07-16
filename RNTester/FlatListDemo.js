import React, { Component } from 'react'
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'

const data = [
  {
    key: '1' // the key should be a string
  },
  {
    key: '2'
  },
  {
    key: '3'
  },
  {
    key: '4' // the key should be a string
  },
  {
    key: '5'
  },
  {
    key: '6'
  }
]

const hairline = StyleSheet.hairlineWidth

export default class FlatListDemo extends Component {
  state = {
    listHeight: 0
  }

  render() {
    const renderItem = ({ item, index }) => (
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 44 }}>
        <Text>{`第${index + 1}行的Text`}</Text>
      </View>
    )
    const resetHeight = (e) => {
      console.log('--height--', e.nativeEvent.layout.height)
      this.setState({
        listHeight: e.nativeEvent.layout.height
      })
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee111' }}>
        <FlatList
          style={{ backgroundColor: 'cyan' }}
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{ width: '100%', height: hairline, backgroundColor: 'magenta' }}/>}
          ListEmptyComponent={
            <View
              style={{
                height: Dimensions.get('window').height - 78,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'gray'
              }}>
              <Text>Empty View</Text>
            </View>
          }
          onLayout={resetHeight}
        />
      </SafeAreaView>
    )
  }
}
