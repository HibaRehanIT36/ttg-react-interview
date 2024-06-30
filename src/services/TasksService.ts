import { Task } from '../types/Task';

const currentDate = new Date().toDateString();

const defaultTasks: Task[] = [
  {
    id: 1,
    title: 'Default Task 1',
    description: 'This is the first default task.',
    date: currentDate,
  },
];

class TaskService {
  task_key = 'TASkS';

  constructor() {
    this.commit(defaultTasks);
  }

  loadFromStorage(): Array<Task> {
    var stored = localStorage.getItem(this.task_key);
    return stored ? JSON.parse(stored) : [];
  }

  commit(tasks: Array<Task>) {
    localStorage.setItem(this.task_key, JSON.stringify(tasks));
  }

  getTasks() {
    return this.loadFromStorage();
  }

  getTask(id: number) {
    var tasks = this.loadFromStorage();
    return tasks.find(t => t.id === id);
  }

  addTask(task: Task) {
    var tasks = this.loadFromStorage();
    tasks.push(task);
    this.commit(tasks);
  }

  removeTask(id: number) {
    var tasks = this.loadFromStorage();
    var index = tasks.findIndex(t => t.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    this.commit(tasks);
  }
}
export const taskService = new TaskService();
