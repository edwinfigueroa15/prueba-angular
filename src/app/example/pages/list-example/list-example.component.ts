import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IResponse, IUserInfo } from '../../interfaces/example.interface';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.css']
})
export class ListExampleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'document', 'age', 'email', 'gender', 'hobby'];
  dataSource!: IUserInfo[];

  constructor(
    private exampleService: ExampleService
  ) { }

  ngOnInit(): void {
    this.getInfoSave();
  }


  getInfoSave(): void {
    this.exampleService.getInfo().subscribe((response: IResponse) => {
      this.dataSource = response.data;
    })
  }

  removeInfo(): void {
    localStorage.removeItem('data');
    this.getInfoSave();
  }

}
