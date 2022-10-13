import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import {addTask} from '../../redux/reducers/TaskListReducer';

export default function TaskForm({containerStyle, onToggleForm}) {
  const [newTitle, setNewTitle] = useState();
  const dispatch = useDispatch();

  const onChangeText = val => {
    setNewTitle(val);
  };

  const onConfirmTask = () => {
    if (newTitle !== '') {
      dispatch(addTask({title: newTitle}));
      setNewTitle('');
      onToggleForm();
    }
  };

  return (
    <View style={containerStyle}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
      />
      <CustomButton
        title="Ajouter"
        style={styles.button}
        buttonTextStyle={styles.buttonText}
        onPress={onConfirmTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    color: '#000000',
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
    width: '100%',
    height: 60,
  },
  openContainer: {
    padding: 20,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 3,
    backgroundColor: 'white',
    display: 'flex',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
