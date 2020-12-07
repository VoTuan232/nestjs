import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class UIModule {}