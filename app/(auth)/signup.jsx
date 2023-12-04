import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  Text, TextInput, View,
} from 'react-native';
import { Button, Checkbox, Colors } from 'react-native-ui-lib';
import { UserContext } from '../../contexts/userContext';

function Signup() {
  const { user, saveUser } = useContext(UserContext);
  const [userData, saveUserData] = useState(
    user,
  );
  const [isSelected, setSelection] = useState(false);
  const onChangeText = (val, label) => {
    saveUser({ ...user, [label]: val });

    // console.log({ ...user, [label]: val });
  };
  const onSave = (val, label) => {
    // saveUser(userData);
    router.push('complete-signup');
    console.log(user);
  };

  return (
    <SafeAreaView style={{
      flex: 1, flexDirection: 'column', width: '100%', paddingHorizontal: 100,
    }}
    >

      <View className=" px-3 mt-10">
        <View className="flex justify-center items-center pb-5">

          <Text>Hey There</Text>
          <Text className="font-bold text-xl">Create an Account</Text>
        </View>
        <View className="border-slate-200 flex bg-[#F8f8f8] flex-row py-4  rounded-lg px-2 mb-5">
          <Ionicons
            name="person-outline"
            color="#ccc"
            className="text-slate-200"
            size={24}

          />
          <TextInput value={user.fullname} onChangeText={(e) => onChangeText(e, 'fullname')} placeholder="Fullname" className="pl-4" />

        </View>
        <View className="border-slate-200 flex bg-[#F8f8f8] flex-row py-4  rounded-lg px-2 mb-5">
          <Ionicons
            name="mail-outline"
            color="#ccc"
            className="text-slate-200"
            size={24}
          />
          <TextInput value={user.email} onChangeText={(e) => onChangeText(e, 'email')} className="pl-4" placeholder="Email" />
        </View>
        <View className="border-slate-200  bg-[#F8f8f8] py-4  rounded-lg px-2 mb-5" style={{ display: 'none' }}>
          <Ionicons
            name="lock-closed-outline"
            color="#ccc"
            className="text-slate-200"
            size={24}
          />
          <TextInput value={userData.password} onChangeText={(e) => onChangeText(e, 'password')} className="pl-4" placeholder="Password" />
        </View>
        <View>
          <Checkbox className=" text-sm align-middle" value={isSelected} onValueChange={() => setSelection(!isSelected)} label="By continuing you accept our Privacy Policy and Term of Use" color={Colors.red30} />
        </View>
        <Button label="Press" className=" mt-20 " backgroundColor={Colors.red30} onPress={onSave} />

      </View>
    </SafeAreaView>

  );
}

export default Signup;
