import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TaskItem from './TaskItem';
import TaskForm from './taskForm';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

export default function Tasks() {
  const [taskList, setTasksList] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const onAddTask = title => {
    setTasksList(list => [
      ...taskList,
      {
        id: Date.now(),
        title: title,
        isComplete: false,
      },
    ]);
  };

  const onUpdateTask = id => {
    let newTasks = [];
    taskList.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }

      newTasks.push({
        id,
        title: t.title,
        isComplete: !t.isComplete,
      });
    });
    setTasksList(newTasks);
  };

  const onDeleteTask = id => {
    let newTasks = [];
    taskList.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }
    });
    setTasksList(newTasks);
  };

  const onToggleForm = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const renderItem = ({item}) => {
    return (
      <TaskItem
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <TaskForm
        onAddTask={onAddTask}
        containerStyle={
          isSearchOpen ? styles.searchContainerOpen : styles.searchContainer
        }
        onToggleForm={onToggleForm}
      />
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={styles.flatlist}
      />
      <CustomButton
        onPress={onToggleForm}
        style={styles.searchButton}
        buttonTextStyle={styles.searchButtonText}
        title="+"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 22,
    paddingLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  flatlist: {
    paddingBottom: 100,
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  searchButton: {
    borderRadius: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    zIndex: 2,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
    lineHeight: 20,
  },
  searchContainer: {
    padding: 20,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 3,
    backgroundColor: 'white',
    display: 'none',
  },
  searchContainerOpen: {
    padding: 20,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 3,
    backgroundColor: 'white',
    display: 'flex',
  },
});
