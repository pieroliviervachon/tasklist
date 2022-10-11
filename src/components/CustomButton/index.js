import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

export default function CustomButton({title, onPress, style, buttonTextStyle}) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={buttonTextStyle}>{title}</Text>
    </Pressable>
  );
}
