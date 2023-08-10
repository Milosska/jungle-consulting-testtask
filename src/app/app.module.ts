import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReposComponent } from './pages/repos/repos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { QueryInputComponent } from './components/query-input/query-input.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { FetchService } from './services/fetchService/fetch-service.service';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReposComponent,
    NotFoundComponent,
    NavigationComponent,
    QueryInputComponent,
    UserListComponent,
    RepoListComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [FetchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
