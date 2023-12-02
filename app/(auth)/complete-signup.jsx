/* eslint-disable import/no-extraneous-dependencies */
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet, Text,
  View,
} from 'react-native';
import {
  Button,
  Colors, DateTimePicker, Picker,
} from 'react-native-ui-lib';

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
function CompleteSignup() {
  const [userData, setUserData] = useState(
    {
      email: '',
      password: '',
      fullname: '',
    },
  );
  const [isSelected, setSelection] = useState(false);
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
  return (

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
        <View className="border-slate-200 flex bg-[#F8f8f8] py-4 flex-row align-items-center rounded-lg px-2 mb-5 w-[100%]">

          <Picker
            placeholder="Favorite Language"
            enableModalBlur={false}
            topBarProps={{ title: 'Choose Gender' }}
            style={{ color: Colors.red20 }}
            useSafeArea
            renderPicker={(_value, label) => (
              <View className=" flex bg-[#F8f8f8]  flex-row align-items-center rounded-lg  w-[100%]">
                <Ionicons
                  name="people-outline"
                  color="#ccc"
                  className="text-slate-200"
                  size={24}
                />
                <Text className="pt-1 pl-3 text-slate-400 text-sm w-[85%]">
                  {label}
                  Choose Gender
                </Text>
                <Ionicons
                  name="chevron-down-outline"
                  color="#ccc"
                  className="text-slate-200"
                  size={24}
                />
              </View>
            )}
            searchStyle={{ color: Colors.red30, placeholderTextColor: Colors.grey50 }}
            // onSearchChange={value => console.warn('value', value)}

          >
            {options.map((option) => (
              <Picker.Item
                key={option.value}
                value={option.value}
                label={option.label}
                disabled={option.disabled}
              />
            ))}
          </Picker>

        </View>
        <View className="border-slate-200 flex bg-[#F8f8f8] py-4 flex-row align-items-center rounded-lg px-2 mb-5 w-[100%]">
          <Ionicons
            name="calendar-outline"
            color="#ccc"
            className="text-slate-200"
            size={24}
          />
          <DateTimePicker
            placeholder="Date of Birth"
            placeholderTextColor="#ccc"
            className="w-[100%] pl-3 text-sm"
          />

        </View>

        <Button className="  mt-60 w-[100%] rounded-lg" backgroundColor={Colors.red30} onPress={() => router.push('metrics')}>
          <Text className="text-white">Next</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="white" />
        </Button>

      </View>
    </View>

  );
}

export default CompleteSignup;

const styles = StyleSheet.create({});
