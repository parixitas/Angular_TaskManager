import { Component } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { TodoList } from '../../components/todo-list/todo-list';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [Header, TodoList],
  templateUrl: './todo-page.html',
  styleUrls: ['./todo-page.css'],
})
export class TodoPage {}
