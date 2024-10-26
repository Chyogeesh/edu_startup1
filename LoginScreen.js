import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Submit" onPress={() => alert('Login submitted')} />
    </View>
  );
};

export default LoginScreen;
