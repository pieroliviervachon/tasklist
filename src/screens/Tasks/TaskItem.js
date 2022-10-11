import React from 'react';
import {StyleSheet, View, Pressable, Image, Text} from 'react-native';

export default function TaskItem({task, onUpdateTask, onDeleteTask}) {
  const onChangeStatus = () => {
    onUpdateTask(task.id);
  };
  const onPressDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <View style={task.isComplete ? styles.listItemComplete : styles.listItem}>
      <Pressable style={styles.listItem} onPress={onChangeStatus}>
        <Image
          style={styles.icon}
          source={
            task.isComplete
              ? require('../../assets/icons/icn_check.png')
              : require('../../assets/icons/icn_circle.png')
          }
        />
        <Text style={styles.item}>{task.title}</Text>
      </Pressable>
      <Pressable style={styles.listItem} onPress={onPressDelete}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/icn_bin.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 22,
    paddingLeft: 10,
    color: 'black',
  },
  icon: {
    width: 20,
    height: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  listItemComplete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    opacity: 0.4,
  },
});
