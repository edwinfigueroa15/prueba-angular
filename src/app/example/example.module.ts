import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './pages/form/example.component';
import { MaterialModule } from '../material.module';
import { DialogComponent } from '../components/dialog/dialog.component';
import { ListExampleComponent } from './pages/list-example/list-example.component';

@NgModule({
  declarations: [
    DialogComponent,
    ExampleComponent,
    ListExampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExampleRoutingModule,
    MaterialModule
  ]
})
export class ExampleModule { }
