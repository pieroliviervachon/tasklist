// reducers : function qui retourne un nouveau state
import {createAction, createReducer} from '@reduxjs/toolkit';

const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const addTask = createAction(ADD_TASK);
export const toggleTask = createAction(TOGGLE_TASK);
export const deleteTask = createAction(DELETE_TASK);

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

export default createReducer(initialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    })
    .addCase(toggleTask, (state, action) => {
      return state.map(task => ({
        ...task,
        isComplete:
          task.id !== action.payload.id ? task.isComplete : !task.isComplete,
      }));
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    });
});
