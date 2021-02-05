import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <RNSketchCanvas
            containerStyle={{ backgroundColor: 'grey', flex: 1, justifyContent: "space-between" }}
            canvasStyle={{ backgroundColor: 'white', width: "100%", paddingTop: "100%"}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            clearComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}>Clear</Text></View>}
            strokeWidthComponent={(w) => {
              return (<View style={styles.strokeWidthButton}>
                <View  style={{
                  backgroundColor: '#697382', marginHorizontal: 0,
                  width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                }} />
              </View>
            )}}
            saveComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}>Save</Text></View>}
            savePreference={() => {
              return {
                folder: 'NN_Dataset',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'jpg'
              }
            }}
            onSketchSaved={(success, filePath) => {Alert.alert("This is the app to work on","Image Path: " + filePath)}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
  },
});