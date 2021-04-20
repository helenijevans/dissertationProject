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
  Modal
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
import Video from 'react-native-video';


const LessonScreen = ({ navigation }) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
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
            <Image source={require('./../src/images/Slide1.jpg')}  style={styles.imageStyle} />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ</Text>
              <Text style={styles.paragraph}>you</Text>
            </View>
            <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has now been closed.');
                    setModalVisible(!modalVisible);
                  }}>
                  <Image source={require('./../src/images/_.gif')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        In Chinese characters similarly-defined radicals are used to firmly establish the meaning.
                        {'\n\n'}你 is a good example of this.
                        It is made out of two radicals: 亻and 尔
                        {'\n\n'}亻 is the radical for person
                        {'\n'}尔 means you, that
                        {'\n\n'}Therefore 你 means person that is you, definitively you.
                        </Text>
                    <Text style={styles.closeText}
                    onPress={() => setModalVisible(!modalVisible)}
                    > Go Back </Text>
                </Modal>  
              <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: 'lightblue' }}
                onPress={() => setModalVisible(!modalVisible)}>
                Character Composition
              </Button>       
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./../src/images/Slide2.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>hǎo</Text>
              <Text style={styles.paragraph}>good</Text>
            </View>
            <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal2Visible}
                  onRequestClose={() => {
                    Alert.alert('Modal has now been closed.');
                    setModalVisible(!modal2Visible);
                  }}>
                  <Image source={require('./../src/images/a.gif')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        好 has an unknown origin however there is a theory. 
                        {'\n\n'} It is made out of two radicals: 女 and 子
                        {'\n\n'}女 is the radical for woman
                        {'\n'}子 means child
                        {'\n\n'}Therefore 好 (which means good) is believed to be as it was seen as good for a woman to have a child.
                        </Text>
                    <Text style={styles.closeText}
                    onPress={() => setModal2Visible(!modal2Visible)}
                    > Go Back </Text>
                </Modal>  
              <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: 'lightblue' }}
                onPress={() => setModal2Visible(!modal2Visible)}>
                Character Composition
              </Button>       
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./../src/images/Slide3.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ hǎo</Text>
              <Text style={styles.paragraph}>Hello (aka you + good)</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./../src/images/Slide4.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>ma</Text>
              <Text style={styles.paragraph}>Question particle</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image 
              source={require('./../src/images/Slide5.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ hǎo ma</Text>
              <Text style={styles.paragraph}>How are you? (aka you + good + ?)</Text>
            </View>
          </View>
                    <View style={{ width, height }}>
            <Image 
              source={require('./../src/images/Slide6.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>ne</Text>
              <Text style={styles.paragraph}>Question particle</Text>
            </View>
          </View>
            <View style={{ width, height }}>
            <Image 
              source={require('./../src/images/Slide7.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ ne</Text>
              <Text style={styles.paragraph}>What about you? (aka you + what about)</Text>
              <Button style={styles.paragraph} text = "sssss"/>
            </View>
          </View>
            <View style={{ width, height }}>
            <Image 
              source={require('./../src/images/Slide9.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nín</Text>
              <Text style={styles.paragraph}>you (formal) </Text>
              <Text style={styles.paragraph}> used as a respectful address</Text>
            </View>
             <Button    
              titleStyle={{
                color: "white",
                fontSize: 25,
              }} 
              title="Start Test"
              onPress = {() => navigation.navigate("Test")}
            />
          </View>
          <View style={{ width, height }}>
            <Image 
              source={require('./../src/images/Slide8.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Read and understand the conversation above</Text>
              <Text style={styles.paragraph}>Got it? Move on to the test</Text>
            </View>
          </View>
          <View style={[{ width, height }, styles.wrapper]}>
            <Button
                style={{ fontSize: 40, color: 'black' }}
                containerStyle={{ padding: 10, height: 90, width: width,overflow: 'hidden', borderRadius: 4, backgroundColor: 'lightblue' }}
                onPress = {() => navigation.navigate("Test")}>
                Start Test
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
   container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 25,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 20,
    padding: 30,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});


export default LessonScreen;