import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Rural Education Empowerment App!</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Take a Quiz" onPress={() => navigation.navigate('Quiz')} />
      <Button title="Community Forum" onPress={() => navigation.navigate('Forum')} />
    </View>
  );
};

export default HomeScreen;
