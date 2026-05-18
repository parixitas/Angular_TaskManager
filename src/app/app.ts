import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoModule } from './features/todo/todo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
