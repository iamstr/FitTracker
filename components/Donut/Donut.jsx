import Constants from 'expo-constants';
import React from 'react';
import {
  Animated,
  Easing,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const data = [{
  percentage: 100,
  color: '#ff5050',
  max: 100,
}];
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function Donut({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = 'tomato',
  delay = 0,
  textColor,
  max = 100,
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => Animated.timing(animated, {
    delay: 1000,
    toValue,
    duration,
    useNativeDriver: true,
    easing: Easing.out(Easing.ease),
  }).start(() => {
    animation(percentage);
  });

  React.useEffect(() => {
    animation(percentage);
    animated.addListener((v) => {
      const maxPerc = 100 * v.value / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    }, [max, percentage]);

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G
          rotation="-90"
          origin={`${halfCircle}, ${halfCircle}`}
        >
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color },
          styles.text,
        ]}
      />
    </View>
  );
}
/**
 * Inspiration: https://dribbble.com/shots/6971340-Anthill-Real-Estate-Home-Animated
 */

export default function DonutContainer() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={{
        flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center',
      }}
      >
        {data.map((p, i) => <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: '900', textAlign: 'center' },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
});
