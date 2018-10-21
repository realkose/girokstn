import { MainComponent } from './frame/main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubComponent } from './frame/sub/sub.component';
import { SubModule } from './frame/sub/sub.module';


const routes: Routes = [
  {
    path: '', 
    component: MainComponent
  },
  {
    path: 'sub', 
    component: SubComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SubModule
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
