import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'sub-recording',
  templateUrl: './sub-recording.component.html',
  styleUrls: ['./sub-recording.component.scss']
})
export class SubRecordingComponent implements OnInit {

  tabNo = 1;

  constructor() { }

  ngOnInit() {

  }
  
  onClickTab(tabNo: number) {
    $('.header-menu ul a').removeClass('active');
    if (tabNo === 1 ) {
      $('#recordingTabNo1').addClass('active');
    } else if (tabNo === 2 ) {
      $('#recordingTabNo2').addClass('active');
    } else {
      $('#recordingTabNo3').addClass('active');  
    }
    this.tabNo = tabNo;
    console.log(this.tabNo);
  }
}
