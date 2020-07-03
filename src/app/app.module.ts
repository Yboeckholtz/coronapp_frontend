import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
//search module 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OverviewComponent } from './overview/overview.component';
import { DataService } from './services/data.service';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserListComponent,
    OverviewComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
   
    RouterModule.forRoot([
      {   
        path: '',
        component: HomeComponent 
      },
     {
        path: 'login',
        component: LoginComponent
     },
     {
      path: 'register',
      component: RegisterComponent
   },

  
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
