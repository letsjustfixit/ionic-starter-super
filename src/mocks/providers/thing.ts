import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from '../../providers/api';

@Injectable()
export class Thing {

  constructor(public http: Http, public api: Api) {
  }

  query() : Observable<any> {
    return new Observable(observer => {
      observer.next({
        items: [
          {
            title: 'hi',
            description: 'Thing test',
            avatar: 'blah.jpg'
          }
        ]
      })
    })
  }

}
