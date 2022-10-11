import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Header() {

  const date = new Date();

  const day = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];
  const month = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  return (
    <View style={styles.header}>
      <Text style={styles.date}>
        <Text style={styles.day}>{day[date.getDay()]}</Text> {date.getDate()} {month[date.getMonth()]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  day: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 22,
    fontWeight: '400',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
