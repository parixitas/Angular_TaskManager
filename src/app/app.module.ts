import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';
import { TodoModule } from './features/todo/todo.module';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), TodoModule, App],
  bootstrap: [App],
})
export class AppModule {}
