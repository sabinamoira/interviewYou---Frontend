import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question} from '../common/question/question.component';
import { Observable } from 'rxjs/Observable';
import {apiUrl} from '../../environments/environment';
 


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  
};

@Injectable({ 
  providedIn: 'root'
})


export class QuestionService {
 
  private questionsUrl: string;
  private topicsUrl: string;
 
  constructor(private http: HttpClient) {
    this.questionsUrl = `${apiUrl}/questions`;
    this.topicsUrl = `${apiUrl}/topics`;
  }
 
  public findAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  public findQuestion(id: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.questionsUrl}/${id}`);
  }
 

  public findQuestionOfTopic(topicId: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.topicsUrl}/${topicId}/questions`);
  }


  public save(question: Question) {
    return this.http.post<Question>(this.questionsUrl, question);
  }

  
}