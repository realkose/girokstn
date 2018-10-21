import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { SubComponent } from "src/app/frame/sub/sub.component";
import { SubInfoComponent } from 'src/app/frame/sub/info/sub-info.component';
import { SubRecordingComponent } from './recording/sub-recording.component';
import { SubStenoComponent } from './steno/sub-steno.component';
import { SubProcessComponent } from './process/sub-process.component';

import { FooterModule } from './../../contents/footer/footer.module';

const appRoutes: Routes = [
  { 
    path: 'sub', 
    component: SubComponent,
    children: [{
      path: 'info',
      component: SubInfoComponent
    },
    {
      path: 'recording',
      component: SubRecordingComponent
    },
    {
      path: 'steno',
      component: SubStenoComponent
    },
    {
      path: 'process',
      component: SubProcessComponent
    },
    ]
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FooterModule
  ],
  declarations: [
    SubComponent,
    SubInfoComponent,
    SubRecordingComponent,
    SubStenoComponent,
    SubProcessComponent
  ],
})
export class SubModule {}
