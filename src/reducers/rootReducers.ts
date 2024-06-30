import { combineReducers } from 'redux';

import TodoReducer from '../views/Todo/reducers';

const appReducers = combineReducers({
  todo: TodoReducer,
});

const rootReducers = (state: any, action: any) => {
  // Handle general reducers
  return appReducers(state, action);
};

export type RootState = ReturnType<typeof appReducers>;

export default rootReducers;
