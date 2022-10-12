import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TaskItem from './TaskItem';
import TaskForm from './taskForm';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTask, toggleTask} from '../../redux/actions';
import {getTasks} from '../../redux/selectors';

export default function Tasks() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  const onUpdateTask = id => {
    dispatch(toggleTask(id));
  };

  const onDeleteTask = id => {
    dispatch(deleteTask(id));
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
        containerStyle={
          isSearchOpen ? styles.searchContainerOpen : styles.searchContainer
        }
        onToggleForm={onToggleForm}
      />
      <FlatList
        data={tasks}
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
