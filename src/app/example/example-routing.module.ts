import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './pages/form/example.component';
import { ListExampleComponent } from './pages/list-example/list-example.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ExampleComponent
      },
      {
        path: 'list',
        component: ListExampleComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
