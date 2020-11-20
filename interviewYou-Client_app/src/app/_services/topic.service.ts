import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Topic } from '../common/topic/topic.component';
import {apiUrl} from '../../environments/environment';
import "rxjs/Rx";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    
  };

@Injectable({ 
    providedIn: 'root'
})

//  const apiUrl = 'http://localhost:8080/api/topics';

export class TopicService {
  topics: Topic[];
  currentTopic = null;
  currentIndex = -1;
  topic="Un-updated";
  obj;


    private topicUrl = `${apiUrl}/topics`;
    private categoryUrl = `${apiUrl}/categorys`;

    constructor(private http: HttpClient) {
    }

    reloadPage(): void {
    window.location.reload();
  }



    getTopics(): Observable<any> {
        return this.http.get<Topic[]>(`${this.topicUrl}`);
      }

      

      getValue(topic:string): string {
        return topic;
      }

    
      addTopic(topic: Object): Observable<Object> {
        return this.http.post(`${this.topicUrl}`, topic);
      }
    
      deleteTopic(id: string): Observable<any> {
        return this.http.delete(`${this.topicUrl}/${id}`, {responseType: 'text'});
      }

}
