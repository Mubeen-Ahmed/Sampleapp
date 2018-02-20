import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { SuccessComponent } from './logincomponent/success.component';
import { PagenotfoundComponent } from './logincomponent/pagenotfound.component';


const appRoutes: Routes = [
  { path: 'home' , component: HomecomponentComponent},
  { path: 'login' , component: LogincomponentComponent},
  { path: 'login/success', component: SuccessComponent},
  { path: 'login/pagenotfound', component: PagenotfoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    LogincomponentComponent,
    SuccessComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
