/**
 * Created by LeeHow on 03/05/2017.
 */



import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView
} from 'react-native'

// import { takeSnapshot } from 'react-native-view-shot'
import { takeSnapshot, dirs } from "react-native-view-shot";
// cross platform dirs:
const { CacheDir, DocumentDir, MainBundleDir, MovieDir, MusicDir, PictureDir } = dirs;
// only available Android:
const { DCIMDir, DownloadDir, RingtoneDir, SDCardDir } = dirs;

export default class CustomView extends Component {



  onButtonPress() {
    takeSnapshot(this.snapshotTextView, {
      format: "jpeg",
      quality: 0.8
    })
      .then(
        uri => console.log("Image saved to "+ uri),
        error => alert("Oops, snapshot failed", error)
      )
  }

  render() {

    return <View style={styles.bgView}>
      <Text ref={(view) => this.snapshotTextView = view} style={styles.snapshotText}>snapshot</Text>




      <Button
        onPress={() => this.onButtonPress()}
        title="Press Me"
        accessibilityLabel="See an informative alert"
      />
    </View>
  }
}

const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  snapshotText: {
    color: 'white',
    marginTop: 100,
    width: 300,
    height: 300,
    backgroundColor: 'blue',
    marginLeft: 30
  }
})