import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MnFullpageModule } from 'ngx-fullpage';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './frame/header/header.component';
import { MainModule } from './frame/main/main.module';
import { SubModule } from './frame/sub/sub.module';
// import { FooterComponent } from './contents/footer/footer.component';
import { FooterModule } from './contents/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as firebase from "firebase";

firebase.initializeApp(environment.firebase);

@NgModule({
  imports: [
    BrowserModule,
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    ScrollToModule.forRoot(),
    MnFullpageModule.forRoot(),
    AppRoutingModule,
    MainModule,
    SubModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent, 
    // FooterComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
