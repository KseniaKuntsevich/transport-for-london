import { createStore } from 'redux';
import { loadState, saveState } from '../utils/localState';
import rootReducer from './reducer';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
