import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from '../../common/topic/topic.component'; 
import { TopicService } from '../../_services/topic.service';
import { DataService } from '../../_services/data.service';
import { MessagesViewComponent } from '../../pages/chat/messages-view/messages-view.component';
import * as $ from 'jquery';
 
@Component({
  selector: 'app-topic-list', 
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  messageView: MessagesViewComponent;
  id;
  @Output() valueChange = new EventEmitter<string>();
    
    valueChanged(id) { // You can give any function name
        this.id = id;
        this.valueChange.emit(id);
    }

    newMessage(id) {
      console.log("question id is",id);
      this.data.changeMessage(id);
    }


  topics:string[];
    
  constructor(
    private httpClientService:TopicService, private data: DataService
  ) { }

  ngOnInit() {
    
    this.httpClientService.getTopics().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );

    $(function(){
      $('li').hover(function(){
           $(this).addClass('highlight');
       }, function(){
           $(this).removeClass('highlight');
       });
    
       $('li').click(function(){
        $('li').removeClass('highlight_stay');
        $(this).addClass('highlight_stay');
    });
    });

  }

handleSuccessfulResponse(response)
{
    this.topics=response._embedded.topics;;
    console.log("my array", this.topics)
}


}





// import { Component, OnInit,  OnDestroy,
//   Output,
//   EventEmitter } from '@angular/core';
// import { Topic } from '../../common/topic/topic.component'; 
// import { TopicService } from '../../_services/topic.service';
// import { Router } from '@angular/router';
// //import { CometChat } from '@cometchat-pro/chat';
 
// @Component({
//   selector: 'app-topic-list', 
//   templateUrl: './topic-list.component.html',
//   styleUrls: ['./topic-list.component.scss']
// })
// export class TopicListComponent implements OnInit {
//   // title = 'TopicStore';
//   topics: Topic[]; //= 

//   // [new Topic(1, "OOP Concepts",''), new MyObjClass(2, "Two")];
  
   
  

//   constructor(private router: Router, private topicService: TopicService) {
//   }

//   getTopics() {
//     this.topicService.getTopics().subscribe(data => {
//       this.topics = data;
//       console.log(data);
//     },
//     error => {
//       console.log(error);
//     });
//   }

//   addTopic(): void {
//     this.router.navigate(['add-topic'])
//       .then((e) => {
//         if (e) {
//           console.log("Navigation is successful!");
//         } else {
//           console.log("Navigation has failed!");
//         }
//       });
//   };

//   ngOnInit(): void {
//     this.router.events.subscribe(value => {
//       this.getTopics();
//     });
//   }
// }