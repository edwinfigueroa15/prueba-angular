import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class MaterialModule { }