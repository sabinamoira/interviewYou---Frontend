import { Component, OnInit } from '@angular/core';
import { Question } from '../../common/question/question.component'; 
import { QuestionService } from '../../_services/question.service';
 
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
 
  questions: Question[];
 
  constructor(private questionService: QuestionService) {
  }
 
  ngOnInit() {
    this.questionService.findAll().subscribe(data => {
      this.questions = data;
    });
  }
}
