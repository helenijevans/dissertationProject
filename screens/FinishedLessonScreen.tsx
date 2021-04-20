import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  PixelRatio,
  Image,
  Linking
} from 'react-native';
import Button from 'react-native-button';
import {Input} from 'react-native-elements';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const FinishedLessonScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{ width, height }}>
            <View style={styles.wrapper}>
              <Text style={styles.header}>Basics 1</Text>
              <Text style={styles.paragraph}>你，好，吗，您，呢</Text>
            </View>
              <Text style={styles.paragraph}>Please click on the button below to give feedback on your learning experience.</Text>
              <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, marginTop: 20, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: 'lightblue' }}
                onPress={ ()=>{ Linking.openURL('https://forms.gle/LsLkR5wbwCfr14Y1A')}}
              >
                Questionnaire
              </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },

});


export default FinishedLessonScreen;