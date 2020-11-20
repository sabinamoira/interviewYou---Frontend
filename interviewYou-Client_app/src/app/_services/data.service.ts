import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import "rxjs/Rx";

@Injectable({ 
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    console.log("message changed", message);
    this.messageSource.next(message)
  }

}