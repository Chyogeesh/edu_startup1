import React from 'react';
import { View, Text, Button } from 'react-native';

const QuizScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Quiz Section</Text>
      {/* Implement quiz questions here */}
      <Button title="Submit Answers" onPress={() => alert('Quiz submitted')} />
    </View>
  );
};

export default QuizScreen;
