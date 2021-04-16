import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  PixelRatio,
  Image
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const LessonScreen = ({ navigation }) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

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
            <Image source={require('./../Slide1.jpg')}  style={styles.imageStyle} />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ</Text>
              <Text style={styles.paragraph}>you</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./../Slide2.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>hǎo</Text>
              <Text style={styles.paragraph}>good</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./../Slide3.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ hǎo</Text>
              <Text style={styles.paragraph}>Hello (aka you + good)</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./../Slide4.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>ma</Text>
              <Text style={styles.paragraph}>Question particle</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image 
              source={require('./../Slide5.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ hǎo ma</Text>
              <Text style={styles.paragraph}>How are you? (aka you + good + ?)</Text>
            </View>
          </View>
                    <View style={{ width, height }}>
            <Image 
              source={require('./../Slide6.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>ne</Text>
              <Text style={styles.paragraph}>Question particle</Text>
            </View>
          </View>
            <View style={{ width, height }}>
            <Image 
              source={require('./../Slide7.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ ne</Text>
              <Text style={styles.paragraph}>What about you? (aka you + what about)</Text>
            </View>
          </View>
            <View style={{ width, height }}>
            <Image 
              source={require('./../Slide9.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nín</Text>
              <Text style={styles.paragraph}>you (formal) </Text>
              <Text style={styles.paragraph}> used as a respectful address</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image 
              source={require('./../Slide8.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Read and understand the conversation above</Text>
              <Text style={styles.paragraph}>Got it? Move on to the test</Text>
            </View>
          </View>
          <View style={[{ width, height }, styles.wrapper]}>
            <Button    
              titleStyle={{
                color: "white",
                fontSize: 25,
              }} 
              title="Start Test"
              onPress = {() => navigation.navigate("Test")}
            />
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


export default LessonScreen;