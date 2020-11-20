import { Component, OnInit } from '@angular/core';
import { TopicService } from '../_services/topic.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  topics:string[];
   
  constructor(
    private httpClientService:TopicService
  ) { }

  ngOnInit() {
    this.httpClientService.getTopics().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
    this.topics=response._embedded.topics;;
    console.log("my array", this.topics)
}


deleteTopic(id: string): void {
  this.httpClientService.deleteTopic(id)
    .subscribe( data => {
      this.topics= this.topics.filter(u => u !== id);
    })
};


}


