import React from 'react';
import { View, Text, Button } from 'react-native';

const ForumScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Community Forum</Text>
      {/* Implement forum features here */}
      <Button title="Post a Question" onPress={() => alert('Post submitted')} />
    </View>
  );
};

export default ForumScreen;
