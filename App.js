import React, {Component } from 'react';
import axios from 'axios';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  Alert,
  Modal
} from 'react-native';

import RNFS from 'react-native-fs';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {
        "Question 1: What is the character for good?": "hao3 good",
        "Question 2: What is the character for you?": "ni3 you"
      },
      currentQ: ""
    };
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text>{this.state.currentQ = Object.keys(this.state.questions)[Math.floor(Math.random()*Object.keys(this.state.questions).length)]}</Text>
          <RNSketchCanvas
            containerStyle={{ backgroundColor: 'grey', flex: 1, justifyContent: "space-between" }}
            canvasStyle={{ backgroundColor: 'white', width: "100%", paddingTop: "100%"}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            undoComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}>Undo</Text></View>}
            clearComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}>Clear</Text></View>}
            saveComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}>Save</Text></View>}
            savePreference={() => {
              return {
                folder: 'NN_Dataset',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'jpg'
              }
            }}
            onSketchSaved={async(success, filePath) => {
              //Alert.alert("This is the app to work on","Image Path: " + filePath);
              RNFS.readFile(filePath, "base64")
              .then(base64String => {
                const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'image/jpeg' },
                  body: (base64String)
                };
                fetch('http://192.168.0.72:5000/api/test', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                      var classification = data.classification;
                      Alert.alert(classification == this.state.questions[this.state.currentQ]? "Correct" : "Incorrect");
                      //Alert.alert("Classification", JSON.stringify(data.classification))
                    })
                    .catch(error => {
                      Alert.alert("Upload failed!" + JSON.stringify(error));
                      console.log(error);
                    });
              })
              .catch( error => console.log(error))
            }}
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