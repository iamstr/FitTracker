import React, { useState } from 'react';
import {
  Dimensions, Image, StyleSheet, Text, View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-ui-lib';

const IMG1 = require('../../assets/app/onboarding-1.png');
const IMG2 = require('../../assets/app/onboarding-2.png');
const IMG3 = require('../../assets/app/onboarding-3.png');

const { width, height } = Dimensions.get('window');
const slides = [
  {
    key: 'one',
    title: 'Track Your Goal',
    text: 'Don\'t worry if you have trouble determining your goals, We can help you determine your goals and track your goals',
    image: IMG1,
  },
  {
    key: 'two',
    title: 'Get Burn',
    text: 'Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever',
    image: IMG2,
  },
  {
    key: 'three',
    title: 'Eat Well',
    text: 'Let\'s start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun',
    image: IMG3,
  },
];

function OnBoarding() {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    // User finished the introduction. Show the real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.slideContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <>

      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
      />
      {showRealApp && <Button />}
    </>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width, // Adjust the width to fit the screen
    height: height - 280, // Fixed height for images
    resizeMode: 'cover', // or 'contain' based on your preference
  },
  slideContent: {
    // position: 'absolute', // Put the content on top of the image
    // bottom: 0, // Place the content at the bottom
    padding: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
    width: '100%', // Fill the entire width
    alignItems: 'flex-start', // Align content to the left
  },
  title: {
    fontSize: 22,
    color: '#1D1617',
    fontFamily: 'Poppins_600SemiBold',
  },
  text: {
    color: '#7B6F72',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 24,
    paddingTop: 20,
  },
});

export default OnBoarding;
