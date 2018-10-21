import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './../../app-routing.module';

import { MainComponent } from './../../frame/main/main.component';
import { InfoComponent } from './../../contents/info/info.component';
import { RecordingComponent } from './../../contents/recording/recording.component';
import { MeetingComponent } from './../../contents/meeting/meeting.component';
import { RealtimeComponent } from './../../contents/realtime/realtime.component';
import { SupportComponent } from './../../contents/support/support.component';
import { ContactComponent } from './../../contents/contact/contact.component';
import { FooterModule } from './../../contents/footer/footer.module';

// import { FooterComponent } from './../../contents/footer/footer.component';

@NgModule({
  imports: [
    AppRoutingModule,
    FooterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9F1c1aV2AtYeqk40OdmyeL_ThcInt48I'
    })
  ],
  declarations: [
    MainComponent,
    InfoComponent,
    RecordingComponent,
    MeetingComponent,
    RealtimeComponent,
    SupportComponent,
    ContactComponent,
    // FooterComponent
  ],
})
export class MainModule {}
