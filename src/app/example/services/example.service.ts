import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IResponse, IUserInfo } from '../interfaces/example.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  getInfo(): Observable<IResponse> {
    if(localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data')!)
      
      return of(data).pipe(
        map(info => {
          const response = info.map((item: IUserInfo) => {
            item.name = `${item.name} ${item.last_name}`;
            delete item.last_name
            return item
          })
          return  { error: false, msg: 'No existe informacion por el momento', data: response }
        })
      )

    } else {
      return of({ error: false, msg: 'No existe informacion por el momento', data: [] })
    }
  }

  saveInfo(body: IUserInfo) {
    if(localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data')!)
      localStorage.setItem('data', JSON.stringify([...data, body]))

    } else {
      localStorage.setItem('data', JSON.stringify([body]))
    }
  }
}
