/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextField } from 'react-native-ui-lib';
import { isValidEmail } from '../../service';

function Signup() {
  const [userData, setUserData] = useState(
    {
      email: '',
      password: '',
      fullname: '',
    },
  );
  const onChangeText = (val, label) => {
    console.log(val, label);
  };

  return (
    <View>
      <Text>Hey There</Text>
      <Text>Create an Account</Text>
      <TextField
        placeholder="Placeholder"
        floatingPlaceholder
        onChangeText={(e) => onChangeText(e, 'fullname')}
        enableErrors
        validate={['required', (value) => value.length > 5]}
        validationMessage={['Field is required', 'Name is too short']}
        showCharCounter
        maxLength={50}
        value={userData.fullname}
      />
      <TextField
        placeholder="Placeholder"
        floatingPlaceholder
        onChangeText={(e) => onChangeText(e, 'email')}
        enableErrors
        validate={['required', 'email', (value) => isValidEmail(value)]}
        validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
        showCharCounter
        maxLength={30}
        value={userData.email}
      />
      <TextField
        placeholder="Placeholder"
        floatingPlaceholder
        onChangeText={(e) => onChangeText(e, 'password')}
        enableErrors
        validate={['required', (value) => value.length > 6]}
        validationMessage={['Field is required', 'Password is too short']}
        showCharCounter
        maxLength={30}
        value={userData.password}
      />

    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({});
