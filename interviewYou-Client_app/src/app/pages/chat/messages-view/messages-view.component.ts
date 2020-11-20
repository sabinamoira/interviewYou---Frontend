import {
  NgModule, 
  Component,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  OnChanges, 
  SimpleChanges,
  OnInit
} from '@angular/core';
import { timer } from 'rxjs';
import { QuestionService } from '../../../_services/question.service';
import { DataService } from '../../../_services/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.scss']
})
export class MessagesViewComponent implements OnChanges, OnInit{

  questions:string[];
  id: string;
  //check: string;

  messages: string[] | null = [];
  @Input() selectedTopicID;

  @Input() userMessage: string;
 // @Input() sendMessage = new EventEmitter<string>();//sendMessage

  @Output() sendMessage = new EventEmitter<string>();
  

  messagesContainer: ElementRef<HTMLDivElement>;
   
  constructor(
    private httpClientService:QuestionService, private data: DataService
  ) { this.data.currentMessage.subscribe(message => this.id = message); }


  receiveMessage($event) {
    this.id = $event
  }

    onSendMessage(message: string) {
      //message = message.toString();
      console.log(message);
      if (message !== "") {
      this.messages.push(message);
      }
      this.check(message);
      console.log("message array",this.messages[0]);
   // this.sendMessage.emit(message);
  }

  check(e: string){
    console.log("check value",e);
    var checkQ=("Get Question"== e);
    var checkA=("Get Answer"== e);
    if (checkQ){ this.getQuestion(this.id,"q"); } //do something if true
    if(checkA){this.getQuestion(this.id,"a");} //do something if false
    if(!checkQ){}
    }

  // ngOnInit() {
    getQuestion(id: string,part:string){
      console.log("question id is",id)
      this.id = id;
    this.httpClientService.findQuestionOfTopic(this.id).subscribe(
     response =>this.handleSuccessfulResponse(response,part),
    );
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.id = message);

  }



    ngOnChanges(changes: SimpleChanges): void {
      this.data.currentMessage.subscribe(message => this.id = message);
      // if (changes.id) {
      //   console.log("entered")
      //   this.getQuestion(this.id);
      //   this.messages.push(this.questions[1]);
      // }
      if (changes.messages) {
        console.log("id is ",this.id);
      timer(10).subscribe(() => this.scrollIntoView());
    }
  }

    private scrollIntoView() {
    if (this.messagesContainer) { 
      const { nativeElement } = this.messagesContainer;
      nativeElement.scrollTop = nativeElement.scrollHeight;
    }
  }

handleSuccessfulResponse(response,part)
{   if(part == "q"){
    //this.questions=response._embedded.questions;;
    var array =response._embedded.questions[0].question;
    this.messages.push(array + "\n Type \"Get Answer\" to get the answer");
    console.log("my question is", array);
  }
  if(part == "a"){
    var array =response._embedded.questions[0].answer;
    this.messages.push(array + "\n Type \"Get Question\" to get a new question");
    console.log("my answer is", array);
  }
}

}




// import {
//   Component,
//   Output,
//   EventEmitter,
//   Input,
//   ViewChild,
//   ElementRef,
//   OnChanges, 
//   SimpleChanges
// } from '@angular/core';
// import { AuthService } from 'src/app/_services/auth.service';
// import { CometChat } from '@cometchat-pro/chat';
// import { timer } from 'rxjs';
// import { AppComponent } from '../../../app.component';
// import { TopicListComponent } from '../../../common-list/topic-list/topic-list.component';

// @Component({
//   selector: 'app-messages-view',
//   templateUrl: './messages-view.component.html',
//   styleUrls: ['./messages-view.component.scss']
// })
// export class MessagesViewComponent implements OnChanges {
//   @Input() messages: CometChat.TextMessage[] | null;
//   @Input() selectedTopicName: string;

//   @Output() sendMessage = new EventEmitter<string>();

//   @ViewChild('scrollMe', { static: false })
//   messagesContainer: ElementRef<HTMLDivElement>;

//   constructor(readonly authService: AuthService,
//   readonly appComponent: AppComponent)
//    {}


   

  
   

 
//   onSendMessage(message: string) {
//     this.sendMessage.emit(message);
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes.messages) {
//       timer(10).subscribe(() => this.scrollIntoView());
//     }
//   }

//   private scrollIntoView() {
//     if (this.messagesContainer) { 
//       const { nativeElement } = this.messagesContainer;
//       nativeElement.scrollTop = nativeElement.scrollHeight;
//     }
//   }
// }
