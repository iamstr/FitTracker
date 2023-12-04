/* eslint-disable import/no-extraneous-dependencies */
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useContext, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet, Text,
  View,
} from 'react-native';
import {
  Button,
  Colors,
  RadioButton,
  RadioGroup,
} from 'react-native-ui-lib';
import { UserContext } from '../../contexts/userContext';

const options = [
  { label: 'JavaScript', value: 'js' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' },
  { label: 'C++', value: 'c++', disabled: true },
  { label: 'Perl', value: 'perl' },
];
const filters = [
  { label: 'All', value: 0 },
  { label: 'Draft', value: 1 },
  { label: 'Published', value: 2 },
  { label: 'Scheduled', value: 3 },
];

const schemes = [
  { label: 'Default', value: 1 },
  { label: 'Light', value: 2 },
  { label: 'Dark', value: 3 },
];
const data = [
  { value: 'Maintain Weight' },
  { value: 'Lose Weight' },
  { value: 'Gain Weight' },
];
function Activity() {
  const [userData, setUserData] = useState(
    {
      email: '',
      password: '',
      fullname: '',
    },
  );
  const { user } = useContext(UserContext);
  const [isSelected, setSelection] = useState(false);
  const [option, setOption] = useState(null);
  const onChangeText = (val, label) => {
    setUserData({ ...userData, [label]: val });
    console.log({ ...userData, [label]: val });
  };
  const onSave = (val, label) => {
    router.push('complete-signup');
  };
  const IMG = require('../../assets/signup/lift.png');
  const IMG_WIDTH = Dimensions.get('window').width * 0.5;
  const IMG_HEIGHT = Dimensions.get('window').height * 0.05;
  const transparentIcon = (
    <Ionicons
      name="chevron-forward-outline"
      color="#fff"
      className="text-slate-200"
      size={24}
    />
  );
  return (
    <ScrollView>
      <View
        className=" px-3 mt-20"
        style={{
          flex: 1, flexDirection: 'column', width: '100%', paddingHorizontal: 10, alignItems: 'center',
        }}
      >

        <View className="flex justify-center items-center pb-5">

          <Text className="font-bold text-2xl">Let’s complete your profile</Text>
          <Text className="text-slate-400 pt-2">It will help us to know more about you!</Text>
        </View>
        <View className="flex justify-center items-center" width={Dimensions.get('window').width * 0.9}>

          <RadioGroup>
            <RadioButton
              value="sedentary"
              label="Sedentary (Office Job)"
              containerStyle={{ ...styles.contentOnLeft, width: Dimensions.get('window').width * 0.9 }}
            />
            <RadioButton
              value="light"
              label="Light Exercise(1-2 days per week)"
              containerStyle={{ ...styles.contentOnLeft, width: Dimensions.get('window').width * 0.9 }}
            />
            <RadioButton
              value="moderate"
              label="Moderate Exercise(3-5 days per week)"
              containerStyle={{ ...styles.contentOnLeft, width: Dimensions.get('window').width * 0.9 }}
            />
            <RadioButton value="heavy" label="Heavy Exercise(6-7 days per week)" iconOnLeft containerStyle={{ ...styles.contentOnLeft, width: Dimensions.get('window').width * 0.9 }} />
            <RadioButton value="athlete" label="Athlete Exercise(2X a day)" iconOnLeft containerStyle={{ ...styles.contentOnLeft, width: Dimensions.get('window').width * 0.9 }} />
          </RadioGroup>

          <Button className="rounded-lg mt-20 w-[100%]" backgroundColor={Colors.red30} onPress={() => { router.push('tdee'); }}>
            <Text className="text-white">Next</Text>
            <Ionicons
              name="chevron-forward-outline"
              color="#fff"
              className="text-slate-200"
              size={24}
            />
          </Button>

        </View>
      </View>
    </ScrollView>

  );
}

export default Activity;

const styles = StyleSheet.create({
  contentOnLeft: {
    // flex: 1,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    backgroundColor: '#f8faf8',
    borderRadius: 5,
    width: 300,
    height: 70,
    padding: 10,
    marginTop: 20,
  },
  iconStyle: {
    color: 'transparent',
    backgroundColor: 'transparent',
    opacity: 0,
    tintColor: 'none',
    display: 'none',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
