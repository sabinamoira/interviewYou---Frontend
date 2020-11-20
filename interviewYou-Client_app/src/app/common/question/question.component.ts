import { Component, OnInit } from '@angular/core';
import {Deserializable} from "../../shared/models/deserializable";

// @Component({
//   selector: 'app-question',
//   templateUrl: './question.component.html',
//   styleUrls: ['./question.component.scss']
// })
// export class QuestionComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import {Deserializable} from "../../shared/models/deserializable";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements  Deserializable {

  constructor() { }

  ngOnInit(): void {
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}

export class Question {

  constructor(
    public id: number,
    public question: string,
    public answer: string,
    public _links: string
  ) {}


 }