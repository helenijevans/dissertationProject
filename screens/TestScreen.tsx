import React, {Component, useState, useRef} from 'react';
import axios from 'axios';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Image,
  Dimensions
} from 'react-native';
import Button from 'react-native-button';
import RNFS from 'react-native-fs';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import RNSmtpMailer from "react-native-smtp-mailer";
import { Icon } from 'react-native-elements';

const TestScreen = ({ navigation }) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const { width, height } = Dimensions.get('window');
    const questions = {
        "Question 1: What is the character for 'good'?": "hao3 good",
        "Question 2: What is the character for 'you'?": "ni3 you",
        "Question 3: What is the character for 'you' formally?": "nin2 you formal",
        "Question 4: Fill in the blank for 'how are you' - 你好__?": "ma0 q",
        "Question 5: Fill in the blank for 'and you' - 你__?": "ne0 q"
    }
    const answers = [
     {image: require('./../src/images/Slide2.jpg')},
     {image: require('./../src/images/Slide1.jpg')},
     {image: require('./../src/images/Slide9.jpg')},
     {image: require('./../src/images/Slide4.jpg')},
     {image: require('./../src/images/Slide6.jpg')}
    ]

    const clearFunction = useRef(null); // Undeclared reference - state likely updates upon declaration
    const increaseCount = () => {
     if (currIndex < Object.keys(questions).length - 1) {
       setCurrIndex(currIndex + 1);
       clearFunction.current.clear();
     } else {
       navigation.navigate("Lesson Completed")
     }
    }
    const canSkip = true;

    const sendEmail = (filePath, expected, actual) => {
      increaseCount(),
      console.log('here'),
      RNSmtpMailer.sendMail({
      mailhost: "smtp.gmail.com",
      port: "465",
      ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      username: "the.chinese.learning.app@gmail.com",
      password: "Dissertation2021",
      recipients: "the.chinese.learning.app@gmail.com",
      subject: "Issue with Dataset",
      htmlBody: "<h1>Retrain Network</h1><p>Expected: " + expected + " <br>Actual: " + actual + "</p>",
      attachmentPaths: [
        filePath
      ], 
      attachmentNames: [
        "image.jpg"
      ], // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
    })
      .then(success => console.log(success))
      .catch(err => console.log(err));  
    }

    return (
        <View style={styles.container}>
          <Button style={{ fontSize: 20, color: 'black' }} onPress={() => setModalVisible(!modalVisible)}>
           👁️ Peek Character 
          </Button>
          <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                   <Text style={styles.closeText}
                    onPress={() => setModalVisible(!modalVisible)}
                    > Go Back </Text>
                  <Image source ={answers[currIndex].image} style= {styles.image}/>
                </Modal>  
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
            <Text style = {styles.questions}>{Object.keys(questions)[currIndex]}</Text>
            <RNSketchCanvas
            ref = {clearFunction}
            containerStyle={{ backgroundColor: 'grey', flex: 1, justifyContent: "center" }}
            canvasStyle={{ backgroundColor: 'white', width: "100%", paddingTop: "100%"}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            undoComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}><Icon name='undo' /></Text></View>}
            clearComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}><Icon name='close' /></Text></View>}
            saveComponent={<View style={styles.functionButton}><Text style={{color: '#697382'}}><Icon name='send' /></Text></View>}
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
                fetch('http://138.68.176.32:5000/api/test', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        var classification = data.classification;

                        const isCorrectAnswer = (questions[Object.keys(questions)[currIndex]] === classification);
                        //const isCorrectAnswer = true; //line to test app not neural network
                        //Alert.alert(isCorrectAnswer ? "Correct" : "Incorrect");
                        Alert.alert(
                          console.log(isCorrectAnswer),
                          isCorrectAnswer ? "Correct" : "Incorrect" , 
                          isCorrectAnswer ?
                            [
                              {text: "Next"},
                            ] :
                            [
                              {text: "No, It's Correct", onPress:() => {sendEmail(filePath, questions[Object.keys(questions)[currIndex]], classification )}},
                              {text: 'Retry'}, 
                            ],
                            { cancelable: false }
                        );

                        if (isCorrectAnswer) {
                          increaseCount();
                        }
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
        <Button style={{ fontSize: 20, color: 'black' }} onPress={increaseCount}>
           Skip >>
          </Button>
        </View>
    )
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
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 50,
    backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 30,
  },
  questions: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "grey",
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
  },
  skip: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  closeText: {
    paddingTop: 50,
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  },
   image: {
    marginTop: 25,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
});

export default TestScreen;