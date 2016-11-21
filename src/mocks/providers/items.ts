import { Observable, Observer, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  _items: Item[] = [];
  items: Observable<Item[]>;

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    this.items = Observable.create((observer: Observer<Item[]>) => {
      observer.next(this._items);
    })


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

     for(let item of items) {
       this._items.push(new Item(item));
     }
  }

  add(item: Item) {
    this._items.push(item);
  }

  delete(item: Item) {
    this._items.splice(this._items.indexOf(item));
  }

  getItems() {
    return this.items;
  }
}
