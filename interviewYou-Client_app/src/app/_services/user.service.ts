import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Topic, TopicComponent } from '../common/topic/topic.component';
import { TopicListComponent } from '../common-list/topic-list/topic-list.component';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {JwtResponse} from '../response/JwtResponse';
import {CookieService} from 'ngx-cookie-service';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private currentUserSubject: BehaviorSubject<JwtResponse>;
  public currentUser: Observable<JwtResponse>;
  public nameTerms = new Subject<string>();
  public name$ = this.nameTerms.asObservable();
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
      const memo = localStorage.getItem('currentUser');
      this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo));
      this.currentUser = this.currentUserSubject.asObservable();
      cookieService.set('currentUser', memo);
  }

  get currentUserValue() {
      return this.currentUserSubject.value;
  }




  //constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  // getTopics(): Observable<Topic[]> {
  //   return this.http.get<Topic[]>('http://localhost:8080/api/topics/');
  // }
  




}