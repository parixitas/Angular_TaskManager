import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from './components/header/header';

@NgModule({
  imports: [CommonModule, Header],
  exports: [Header],
})
export class SharedModule {}
