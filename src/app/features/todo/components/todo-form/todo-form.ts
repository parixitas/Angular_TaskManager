import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrls: ['./todo-form.css'],
})
export class TodoForm {
  title = '';

  @Output() add = new EventEmitter<string>();

  addTodo(): void {
    if (!this.title.trim()) {
      return;
    }

    this.add.emit(this.title.trim());
    this.title = '';
  }
}
