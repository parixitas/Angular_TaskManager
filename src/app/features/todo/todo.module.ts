import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { TodoForm } from './components/todo-form/todo-form';
import { TodoItem } from './components/todo-item/todo-item';
import { TodoList } from './components/todo-list/todo-list';
import { TodoPage } from './pages/todo-page/todo-page';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, TodoForm, TodoItem, TodoList, TodoPage],
  exports: [TodoPage],
})
export class TodoModule {}
