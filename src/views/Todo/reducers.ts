import { TodoActionTypes } from './actions';
import { combineReducers } from 'redux';
import { Task } from '../../types/Task';

const defaultState: Task[] = [];

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return [...state, action.payload];
    case TodoActionTypes.deleteTodo: {
      return state.filter(task => task.id !== action.payload);
    }
    case TodoActionTypes.initializeTodo:
      return action.payload; 
    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
