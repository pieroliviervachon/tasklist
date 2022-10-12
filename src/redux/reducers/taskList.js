// reducers : function qui retourne un nouveau state
import {addTask, toggleTask, deleteTask} from './../actions';
import {createAction, createReducer} from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1665539235066',
    title: "Enregistrer les tache sur l'appareil",
    isComplete: false,
  },
  {
    id: '1665539235067',
    title: 'Modifier une tâche',
    isComplete: false,
  },
  {
    id: '1665539235068',
    title: 'Ajouter des compteur de tâches générales',
    isComplete: false,
  },
  {
    id: '1665539235069',
    title: 'Ajouter des compteur de tâches complétées',
    isComplete: false,
  },
  {
    id: '1665539235070',
    title: "Ajuster l'apparence des tâches si le texte est trop long",
    isComplete: false,
  },
];

export const taskListReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload,
          isCompleted: false,
        },
      ];
    })
    .addCase(toggleTask, (state, action) => {
      let newTasks = [];
      state.forEach(task => {
        if (task.id !== action.payload) {
          newTasks.push(task);
          return;
        }

        newTasks.push({
          ...task,
          isComplete: !task.isComplete,
        });
      });
      return newTasks;
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter(task => task.id !== action.payload);
    });
});
