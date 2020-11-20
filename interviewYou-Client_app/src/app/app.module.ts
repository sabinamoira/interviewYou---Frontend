import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './_services/data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { TypographyComponent} from './pages/typography/typography.component';
import { ChatComponent } from './pages/chat/chat.component'
import { MessagesViewComponent } from './pages/chat/messages-view/messages-view.component';
import { ContactsListComponent } from './pages/chat/contacts-list/contacts-list.component';
import { CategoryListComponent } from './common-list/category-list/category-list.component';
import { QuestionListComponent } from './common-list/question-list/question-list.component';
import { TopicListComponent } from './common-list/topic-list/topic-list.component';
import { TopicAddComponent } from './add/topic-add/topic-add.component';
//import { SpeechComponent } from './pages/speech/speech.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    //SidebarComponent,
    TypographyComponent,
    MessagesViewComponent,
    ChatComponent,
    ContactsListComponent,
    CategoryListComponent,
    QuestionListComponent,
    TopicListComponent,
    TopicAddComponent
    //SpeechComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }