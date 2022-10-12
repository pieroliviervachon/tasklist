// Actions : function qui retourne un objet qui sera traité par les reducers - { type: NOM_ACTION, payload: { DATA } }
import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actionsType';
import {createAction} from '@reduxjs/toolkit';

export const addTask = createAction(ADD_TASK);
export const toggleTask = createAction(TOGGLE_TASK);
export const deleteTask = createAction(DELETE_TASK);
