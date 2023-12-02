/* eslint-disable import/no-extraneous-dependencies */
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import {
  Button,
  Colors,
} from 'react-native-ui-lib';

import ScaleSvg from '../../assets/signup/scale-outline.svg';

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
function Metrix() {
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

        <Text className="font-bold text-2xl">Body Measurement</Text>
      </View>
      <View className="flex justify-center items-center" width={Dimensions.get('window').width * 0.9}>

        <View className="flex w-[100%] flex-row mb-10">
          <View className="border-slate-200 flex bg-[#F8f8f8] flex-row py-4  rounded-lg px-2  w-[75%] mr-3">

            <ScaleSvg width={24} height={24} />
            <TextInput value={userData.email} onChangeText={(e) => onChangeText(e, 'email')} className="pl-4 " placeholder="Weight" placeholderTextColor="#ccc" />
          </View>
          <Button className="rounded-xl text-red-700 w-[15%] mr-1 px-0 min-w-[60]" backgroundColor={Colors.red40}>
            <Text className="text-white font-bold px-0 min-w-[10]"> KG</Text>
          </Button>
        </View>
        <View className="flex w-[100%] flex-row">
          <View className="border-slate-200 flex bg-[#F8f8f8] flex-row py-4  rounded-lg px-2  w-[75%] mr-3">
            <Ionicons
              name="swap-vertical-outline"
              color="#ccc"
              className="text-slate-200"
              size={24}
            />
            <TextInput value={userData.password} onChangeText={(e) => onChangeText(e, 'password')} className="pl-4 w-[250] d-flex " placeholder="Height" placeholderTextColor="#ccc" />
          </View>

          <Button className="rounded-xl text-red-700 w-[15%] mr-1 px-0 min-w-[60]" backgroundColor={Colors.red40}>
            <Text className="text-white font-bold px-0 min-w-[10]"> CM</Text>
          </Button>
        </View>

        <Button className="rounded-lg mt-60 w-[100%]" backgroundColor={Colors.red30} onPress={() => router.push('goal')}>
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

  );
}

export default Metrix;

const styles = StyleSheet.create({});
