// Actions : function qui retourne un objet qui sera traité par les reducers - { type: NOM_ACTION, payload: { DATA } }
import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actionsType';

// ADD_TASK
export const addTask = title => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

// TOGGLE_TASK
export const toggleTask = id => {
  return {
    type: TOGGLE_TASK,
    payload: {id},
  };
};

// DELETE_TASK
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: {id},
  };
};
