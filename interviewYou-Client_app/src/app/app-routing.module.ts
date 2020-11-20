import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { ChatComponent } from './pages/chat/chat.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { TableComponent } from './pages/table/table.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopicListComponent } from './common-list/topic-list/topic-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent},
 { path: 'chat', component: ChatComponent },
 { path: 'upgrade', component: UpgradeComponent },
 { path: 'diagnostics', component: DashboardComponent},
//  { path: 'forgotpassword', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
{ path: 'forgot-password', component: ForgotPasswordComponent },

  

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }