import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Thing } from '../../models/thing';

@Injectable()
export class Things {
  items: Thing[];
  extraItems: Thing[];

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
         "name": "Gino Giraffe",
         "profilePic": "assets/img/speakers/giraffe.jpg",
         "about": "Gino is a Giraffe."
       },
       {
         "name": "Isabella Iguana",
         "profilePic": "assets/img/speakers/iguana.jpg",
         "about": "Isabella is an Iguana."
       },
       {
         "name": "Karl Kitten",
         "profilePic": "assets/img/speakers/kitten.jpg",
         "about": "Karl is a Kitten."
       },
       {
         "name": "Lionel Lion",
         "profilePic": "assets/img/speakers/lion.jpg",
         "about": "Lionel is a Lion."
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
       },
       {
         "name": "Rachel Rabbit",
         "profilePic": "assets/img/speakers/rabbit.jpg",
         "about": "Rachel is a Rabbit."
       },
       {
         "name": "Ted Turtle",
         "profilePic": "assets/img/speakers/turtle.jpg",
         "about": "Ted is a Turtle."
       }
     ];

     this.items = [];
     for(let item of items) {
       this.items.push(new Thing(item));
     }
  }

  add(thing: Thing) {
    this.items.push(thing);
  }

  query() : Observable<any> {
    return new Observable(observer => {
      observer.next({
        items: this.items
      })
    })
  }

}
