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
  Modal,
  TouchableOpacity
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
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);
  const [modal5Visible, setModal5Visible] = useState(false);
  const [modal6Visible, setModal6Visible] = useState(false);
  const [modal7Visible, setModal7Visible] = useState(false);
  const [modal9Visible, setModal9Visible] = useState(false);
  const [modal8Visible, setModal8Visible] = useState(false);
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    setSliderState({
      ...sliderState,
      currentPage: indexOfNextScreen,
    });
  };
  
  const { currentPage: pageIndex } = sliderState;
  let bullets = [];
  for (let i = 0; i <= 9; i++) {
    bullets.push(
      <TouchableOpacity key={i}>
        <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: (sliderState.currentPage) === i ? 0.5 : 0.2
        }}>
        &bull;
        </Text>
      </TouchableOpacity>
        
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled={true}
          onScroll={setSliderPage}
        >
          <View style={{ width, height }}>
            <Image source={require('./../src/images/Slide1.jpg')}  style={styles.imageStyle} />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ</Text>
              <Text style={styles.paragraph}>you</Text>
            </View>
            <Button
              style={{ fontSize: 20, color: 'black'}}
              containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
              onPress={() => setModalVisible(!modalVisible)}>
              Character Composition
            </Button>  
            <View style = { styles.container }>
              <Modal style={{overflow: 'hidden'}}
                  animationType = {"slide"}
                  transparent={false}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Image source={require('./../src/images/Slide1-g.gif')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        In Chinese characters similarly-defined radicals are used to firmly establish the meaning.
                        {'\n\n'}你 is a good example of this.
                        It is made out of two radicals: 亻and 尔
                        {'\n\n'}亻 is the radical for person
                        {'\n'}尔 means you, that
                        {'\n\n'}Therefore 你 means person that is you, definitively you.
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModalVisible(!modalVisible)}
                    > Go Back </Text> */}
                </Modal>       
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
            <Button
              style={{ fontSize: 20, color: 'black' }}
              containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
              onPress={() => setModal2Visible(!modal2Visible)}>
              Character Composition
            </Button> 
            <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal2Visible}
                  onRequestClose={() => {
                    setModal2Visible(!modal2Visible);
                  }}>
                  <Image source={require('./../src/images/Slide2-g.gif')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        好 has an unknown origin however there is a theory. 
                        {'\n\n'} It is made out of two radicals: 女 and 子
                        {'\n\n'}女 is the radical for woman
                        {'\n'}子 means child
                        {'\n\n'}Therefore 好 (which means good) is believed to be as it was seen as good for a woman to have a child.
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModal2Visible(!modal2Visible)}
                    > Go Back </Text> */}
                </Modal>        
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./../src/images/Slide3.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ hǎo</Text>
              <Text style={styles.paragraph}>Hello</Text>
            </View>
            <Button
              style={{ fontSize: 20, color: 'black' }}
              containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
              onPress={() => setModal3Visible(!modal3Visible)}>
              Character Composition
            </Button> 
            <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal3Visible}
                  onRequestClose={() => {
                    setModal3Visible(!modal3Visible);
                  }}>
                  <Image source={require('./../src/images/Slide3-g.jpg')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        你好 is made up of two characters you have seen previously in this lesson.
                        {'\n\n'}It literally means "you good" 你(you) 好(good)
                        {'\n\n'}This translates to hello and can also be seen in a lot of dialects where "You alright/You good" is seen as a greeting.
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModal3Visible(!modal3Visible)}
                    > Go Back </Text> */}
                </Modal>        
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
            <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
                onPress={() => setModal4Visible(!modal4Visible)}>
                Character Composition
            </Button>
             <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal4Visible}
                  onRequestClose={() => {
                    setModal4Visible(!modal4Visible);
                  }}>
                  <Image source={require('./../src/images/Slide4-g.gif')} style= {styles.image}/>
                    <Text style = { styles.text }>
                       吗 is a semantic-phonetic compound. This means that part of the character gives a clue to its meaning and the other gives a clue as to its pronunciation.
                        {'\n\n'}口 is the left component and means mouth. When you see this in a character the word will mean something mouth or speech related. 
                        {'\n\n'}马 is the right component and means horse. It is prounced mǎ.
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModal4Visible(!modal4Visible)}
                    > Go Back </Text> */}
                </Modal>         
            </View>
          </View>
          <View style={{ width, height }}>
            <Image 
              source={require('./../src/images/Slide5.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ hǎo ma</Text>
              <Text style={styles.paragraph}>How are you?</Text>
            </View>
            <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
                onPress={() => setModal5Visible(!modal5Visible)}>
                Character Composition
              </Button>  
             <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal5Visible}
                  onRequestClose={() => {
                    setModal5Visible(!modal5Visible);
                  }}>
                  <Image source={require('./../src/images/Slide5-g.png')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        你好吗 is made up of three characters you have seen previously in this lesson.
                        {'\n\n'}It literally means "you good?" 你(you) 好(good) 吗(?)
                        {'\n\n'}Adding 吗 to the end of a phrase turns it into a question. For example: You play football + 吗 = Do you play football?
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModal5Visible(!modal5Visible)}
                    > Go Back </Text> */}
                </Modal>       
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
            <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
                onPress={() => setModal6Visible(!modal6Visible)}>
                Character Composition
            </Button>  
             <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal6Visible}
                  onRequestClose={() => {
                    setModal6Visible(!modal6Visible);
                  }}>
                  <Image source={require('./../src/images/Slide6-g.gif')} style= {styles.image}/>
                    <Text style = { styles.text }>
                       呢 is also a semantic-phonetic compound. This means that part of the character gives a clue to its meaning and the other gives a clue as to its pronunciation.
                        {'\n\n'}口 is the left component and means mouth. When you see this in a character the word will mean something mouth or speech related. 
                        {'\n\n'}尼 is the right component and is prounced ní.
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModal6Visible(!modal6Visible)}
                    > Go Back </Text> */}
                </Modal>       
            </View>
          </View>
            <View style={{ width, height }}>
            <Image 
              source={require('./../src/images/Slide7.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>nǐ ne</Text>
              <Text style={styles.paragraph}>What about you?</Text>
            </View>
            <View>
               <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
                onPress={() => setModal7Visible(!modal7Visible)}>
                Character Composition
              </Button>    
            </View>
            <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal7Visible}
                  onRequestClose={() => {
                    setModal7Visible(!modal7Visible);
                  }}>
                  <Image source={require('./../src/images/Slide7-g.jpg')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        你呢 is made up of two characters you have seen previously in this lesson.
                        {'\n\n'}It literally means "what about you?" 你(you) 呢(what about)
                        {'\n\n'}呢 here indicates that a previously asked question is to be applied to the preceding word ("What about ...?", "And ...?")
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModal7Visible(!modal7Visible)}
                    > Go Back </Text> */}
                </Modal>     
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
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
                onPress={() => setModal9Visible(!modal9Visible)}>
                Character Composition
              </Button> 
             <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal9Visible}
                  onRequestClose={() => {
                    setModal9Visible(!modal9Visible);
                  }}>
                  <Image source={require('./../src/images/Slide9-g.gif')} style= {styles.image}/>
                    <Text style = { styles.text }>
                        This character is a respectful way of saying you. It can be substituted with 你 at anytime.
                        {'\n\n'}e.g. 您好 means hello (formal)
                        {'\n\n'}The only difference in the character is the 心 component. 
                        This character means heart and can be attributed to adding courtesy to the address.
                        </Text>
                    {/* <Text style={styles.closeText}
                    onPress={() => setModal9Visible(!modal9Visible)}
                    > Go Back </Text> */}
                </Modal>        
            </View>
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
            <Button
                style={{ fontSize: 20, color: 'black' }}
                containerStyle={{ padding: 10, height: 45,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
                onPress={() => setModal8Visible(!modal8Visible)}>
                Show Answer
            </Button>       
            <View style = { styles.container }>
              <Modal
                  animationType = {"slide"}
                  transparent={false}
                  visible={modal8Visible}
                  onRequestClose={() => {
                    setModal8Visible(!modal8Visible);
                  }}>
                  <Image source={require('./../src/images/Slide8-g.png')} style= {styles.image}/>
                </Modal>   

            </View>
          </View>
          <View style={[{ width, height }, styles.wrapper]}>
            <Button
                style={{ fontSize: 40, color: 'black' }}
                containerStyle={{ padding: 10, height: 90, width: width,overflow: 'hidden', borderRadius: 4, backgroundColor: '#5ce1e6' }}
                onPress = {() => navigation.navigate("Test")}>
                Start Test
              </Button>  
          </View>
        </ScrollView>
        <View style={styles.bullets}>
          {bullets}
        </View>
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
    marginLeft: 10,
    textAlign: 'center',
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
    fontSize: 18,
    padding: 30,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  },
  bullets: {
    position: 'absolute',
    bottom: 50,
    paddingLeft: 90,
    display: 'flex',
    //justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 6,
    fontSize: 30,
  }
});


export default LessonScreen;