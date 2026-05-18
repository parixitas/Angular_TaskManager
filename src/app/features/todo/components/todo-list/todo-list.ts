import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { TodoService } from '../../../../core/services/todo-service';
import { Todo } from '../../models/todo';
import { TodoForm } from '../todo-form/todo-form';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoForm, TodoItem],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css'],
})
export class TodoList {
  private todoService = inject(TodoService);
  activeFilter: 'all' | 'completed' | 'pending' = 'all';
  private filterSubject = new BehaviorSubject<'all' | 'completed' | 'pending'>('all');

  filteredTodos$ = combineLatest([this.todoService.todos$, this.filterSubject]).pipe(
    map(([todos, filter]) => {
      if (filter === 'completed') {
        return todos.filter((todo) => todo.completed);
      }
      if (filter === 'pending') {
        return todos.filter((todo) => !todo.completed);
      }
      return todos;
    })
  );

  totalTodos$ = this.todoService.todos$.pipe(map((todos) => todos.length));
  completedCount$ = this.todoService.todos$.pipe(
    map((todos) => todos.filter((todo) => todo.completed).length)
  );

  addTodo(title: string): void {
    this.todoService.addTodo(title);
  }

  toggle(id: number): void {
    this.todoService.toggleTodo(id);
  }

  delete(id: number): void {
    this.todoService.deleteTodo(id);
  }

  setFilter(value: 'all' | 'completed' | 'pending'): void {
    this.activeFilter = value;
    this.filterSubject.next(value);
  }

  trackById(index: number, todo: Todo): number {
    return todo.id;
  }
}
