/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import TaskScreen from './src/screens/Tasks';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TaskScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
