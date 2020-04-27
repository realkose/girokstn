import { MnFullpageDirective } from 'ngx-fullpage/components/fullpage';
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
import { FooterComponent } from '../../contents/footer/footer.component';
import 'jquery';
import 'fullpage.js';
import fullpage from 'fullpage.js';

declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  public fullpage : any;
  constructor(
    public fullpageService: MnFullpageService
  ) { }

  ngOnInit() {
    this.fullpage =  new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        menu: '#mainMenu',
        navigation: true,
        navigationPosition: 'right',
        paddingTop: '65px',
        scrollingSpeed: 500,
        // fitToSectionDelay: 2000,
        // touchSensitive: 1,
        // continuousVertical: false,
        autoScrolling:true,
        // scrollHorizontally: true
      });
  }

moveMain(menu) {
  // console.log('move!' + menu);
  if (menu === 'appInfo') {
    this.fullpage.moveTo('firstPage');  
  } else if (menu === 'appRecording') {
    this.fullpage.moveTo('secondPage');  
  } else if (menu === 'appSteno') {
    this.fullpage.moveTo('thirdPage');  
  } else if (menu === 'appProcess') {
    this.fullpage.moveTo('fourthPage');  
  } else if (menu === 'appContact') {
    this.fullpage.moveTo('fifthPage');  
  }
}
  ngOnDestroy() {
    this.fullpage.destroy('all');
  }
}

// $(document).OnDestroy(function() {
//   $.fn.fullpage.destroy('all');
// });