//import {createStore} from 'redux';
//import {rootReducers} from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import {reducer, preloadState} from './reducers';

// store attaché à React - accessible a tout les composants
//export const store = createStore(rootReducers);
export const store = configureStore({reducer, preloadState});
