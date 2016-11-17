import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Thing } from './thing';

@Injectable()
export class Things {

  constructor(public http: Http, public api: Api) {
  }

  query() {
    return this.api.get('/things')
      .map(resp => resp.json());
  }

}
