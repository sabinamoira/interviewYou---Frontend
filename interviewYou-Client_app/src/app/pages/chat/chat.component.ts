import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../_services/auth.service';
import { CometChat } from '@cometchat-pro/chat';
import { ChatService } from './chat.service';

import { AppComponent } from '../../app.component';
import { TopicListComponent } from 'src/app/common-list/topic-list/topic-list.component';

const listenerId = 'ChatScreenListener';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  selectedTopic: TopicListComponent;
  messages: CometChat.TextMessage[] | null = null;

  constructor(
    readonly authService: AuthService,
    readonly appComponent: AppComponent,
    readonly chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatService.listenForMessages(listenerId, msg => {
      console.log('New message: ', msg);
      this.messages = [...this.messages, msg];
    });
  }

  ngOnDestroy() {
    this.chatService.removeMessageListener(listenerId);
  }

  async onTopicSelected(topic: TopicListComponent) {
    this.selectedTopic = topic;
    const messages = 'hello'; //await this.chatService.getPreviousMessages(topic.uid);
    console.log('Previous messages', messages);

    //this.messages = (messages as any[]).filter(msg => msg.type === 'text');
  }

  async onSendMessage(message: string) {
    console.log('sending message: ', message);
    const sentMessage = await this.chatService.sendMessage(
      null,null // this.selectedTopic.activeTopic,
      // message
    );

    console.log({ sentMessage });

    if (sentMessage) {
      this.messages = [...this.messages, sentMessage as any];
    }
  }
}
