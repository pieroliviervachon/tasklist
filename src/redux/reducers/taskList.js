// reducers : function qui retourne un nouveau state
import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './../actions/actionsType';

const initalState = [];

export const taskList = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];

    case TOGGLE_TASK:
      let newTasks = [];
      state.forEach(task => {
        if (task.id !== action.payload.id) {
          newTasks.push(task);
          return;
        }

        newTasks.push({
          ...task,
          isComplete: !task.isComplete,
        });
      });
      return newTasks;

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};
