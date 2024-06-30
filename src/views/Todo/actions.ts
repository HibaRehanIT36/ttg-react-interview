import { Dispatch } from 'redux';
import { Task } from '../../types/Task';
import { taskService } from '../../services/TasksService';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
  initializeTodo: 'TODO/INITIALIZE',
  checkTodoExists: 'TODO/CHECK_EXISTS',
};

export class TodoActions {
  addTodo = (title: string, description?: string) => {
    return (dispatch: Dispatch) => {
      const currentDate = new Date().toDateString();
      const newTask: Task = { id: Math.random(), title, description, date: currentDate };
      taskService.addTask(newTask);
      dispatch({ type: TodoActionTypes.addTodo, payload: newTask });
    };
  };

  removeTodo = (id: number) => {
    return (dispatch: Dispatch) => {
      taskService.removeTask(id);
      dispatch({ type: TodoActionTypes.deleteTodo, payload: id });
    };
  };

  initializeTodos = () => {
    return (dispatch: Dispatch) => {
      const tasks = taskService.getTasks();
      dispatch({ type: TodoActionTypes.initializeTodo, payload: tasks });
    };
  };

  checkTodoExists = (title: string) => {
    return (dispatch: Dispatch) => {
      const tasks = taskService.getTasks();
      const exists = tasks.some(task => task.title === title);
      dispatch({ type: TodoActionTypes.checkTodoExists, payload: exists });
      return exists;
    };
  };
}

export const todoActions = new TodoActions();
