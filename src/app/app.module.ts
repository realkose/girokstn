
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { HeaderComponent } from './frame/header/header.component';
import { MainComponent } from './frame/main/main.component';
import { InfoComponent } from './contents/info/info.component';
import { FooterComponent } from './contents/footer/footer.component';
import { RecordingComponent } from './contents/recording/recording.component';
import { MeetingComponent } from './contents/meeting/meeting.component';
import { RealtimeComponent } from './contents/realtime/realtime.component';
import { SupportComponent } from './contents/support/support.component';
import { ContactComponent } from './contents/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase, 'my-app')
  ],
  declarations: [ AppComponent, HeaderComponent, MainComponent, InfoComponent, FooterComponent, RecordingComponent, MeetingComponent, RealtimeComponent, SupportComponent, ContactComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}