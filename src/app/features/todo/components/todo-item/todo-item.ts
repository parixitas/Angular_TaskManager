import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css'],
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}
