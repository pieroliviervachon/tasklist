import React from 'react';
import {View, StyleSheet} from 'react-native';
import Tasks from './Tasks';

export default function TaskScreen() {
  return (
    <View style={styles.view}>
      <Tasks />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
