import { Component, OnInit } from '@angular/core';
import {Deserializable} from "../../shared/models/deserializable";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements Deserializable {

  constructor() { }

  ngOnInit(): void {
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}

export class Topic {

  constructor(
    public id: number,
    public topic: string,
    public _links: string
  ) {}


 }


