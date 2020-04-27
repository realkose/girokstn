import { MainComponent } from './frame/main/main.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'jquery'; // Import jQuery
import 'fullpage.js'; // Import fullpage.js
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  main: any;
  private router = ActivatedRoute;

    constructor(
      private route: ActivatedRoute, private redirector: Router
    ) {    }

  onActivate(componentRef){
    let isSub = $('#subPage');
    if (isSub.length > 0) {
      return false;
    } else {
      this.main = componentRef;
    }
  }

  moveMenu(menu: string) {
    let isSub = $('#subPage');
    
    if (isSub.length > 0) {
      if (menu === 'appInfo') {
        this.redirector.navigate(['/sub/info']);
      } else if (menu === 'appRecording') {
        this.redirector.navigate(['/sub/recording']);
      } else if (menu === 'appSteno') {
        this.redirector.navigate(['/sub/steno']);
      } else if (menu === 'appProcess') {
        this.redirector.navigate(['/sub/process']);
      } else if (menu === 'appContact') {
        this.redirector.navigate(['/']);
        // console.log(this.main);
        let main = this.main 
        if(main) {
            setTimeout(function(){ main.moveMain(menu);}, 300);
         };
      }
    } else {
      this.main.moveMain(menu);
    }
  }
}
