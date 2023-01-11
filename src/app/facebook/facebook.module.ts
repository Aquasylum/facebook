import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { FriendRequestComponent } from './components/friend-request/friend-request.component';
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { CreateStatusComponent } from './components/create-status/create-status.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';

@NgModule({
  declarations: [TaskbarComponent, FriendRequestComponent, BirthdaysComponent, FriendListComponent, CreateStatusComponent, NewsfeedComponent],
  imports: [CommonModule],
  exports: [TaskbarComponent],
})
export class FacebookModule {}
