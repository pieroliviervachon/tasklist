import {createStore} from 'redux';
import {rootReducers} from './reducers';

// store attaché à React - accessible a tout les composants
export const store = createStore(rootReducers);
