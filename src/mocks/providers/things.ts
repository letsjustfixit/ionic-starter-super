import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Thing } from '../../models/thing';

@Injectable()
export class Things {
  items: Thing[];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
         "name": "Burt Bear",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "Burt is a Bear."
       },
       {
         "name": "Charlie Cheetah",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "Charlie is a Cheetah."
       },
       {
         "name": "Donald Duck",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "Donald is a Duck."
       },
       {
         "name": "Eva Eagle",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "Eva is an Eagle."
       },
       {
         "name": "Ellie Elephant",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "Ellie is an Elephant."
       },
       {
         "name": "Molly Mouse",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "Molly is a Mouse."
       },
       {
         "name": "Paul Puppy",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "Paul is a Puppy."
       }
     ];

     this.items = [];
     for(let item of items) {
       this.items.push(new Thing(item));
     }
  }

  add(item: Thing) {
    this.items.push(item);
  }

  delete(item: Thing) {
    this.items.splice(this.items.indexOf(item));
  }

  query() : Observable<any> {
    return new Observable(observer => {
      observer.next({
        items: this.items
      })
    })
  }

}
