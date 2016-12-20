import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { KeyValuesPipe } from './pipe/key-values.pipe';
import { Routing,AppRoutingProviders } from './routers';
import { AuthManager } from './auth.manager';

import {InputTextModule,
        ButtonModule,
        MessagesModule,
        GrowlModule} from 'primeng/primeng';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KeyValuesPipe,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    InputTextModule,
    ButtonModule,
    BrowserModule,
    FormsModule,
    MessagesModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [AppRoutingProviders,AuthManager],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
