import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './src/constants/Colors';
import Main from './src/screens/Main';
import mainStyles from './src/screens/main.styles';

export default function App() {
  return (
    <View style={mainStyles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
