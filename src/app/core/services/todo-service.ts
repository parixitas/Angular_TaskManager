import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../features/todo/models/todo';

const TODO_STORAGE_KEY = 'emi-planner-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor() {
    this.loadTodos();
  }

  private loadTodos(): void {
    const savedValue = localStorage.getItem(TODO_STORAGE_KEY);
    const todos = savedValue ? (JSON.parse(savedValue) as Todo[]) : [];
    this.todosSubject.next(todos);
  }

  private saveTodos(todos: Todo[]): void {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    this.todosSubject.next(todos);
  }

  addTodo(title: string): void {
    if (!title.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    this.saveTodos([...this.todosSubject.value, newTodo]);
  }

  toggleTodo(id: number): void {
    const updated = this.todosSubject.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveTodos(updated);
  }

  deleteTodo(id: number): void {
    const updated = this.todosSubject.value.filter((todo) => todo.id !== id);
    this.saveTodos(updated);
  }
}
