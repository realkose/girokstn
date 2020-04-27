import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'sub-steno',
  templateUrl: './sub-steno.component.html',
  styleUrls: ['./sub-steno.component.scss']
})
export class SubStenoComponent implements OnInit {

  tabNo = 1;

  constructor() { }

  ngOnInit() {

  }
  
  onClickTab(tabNo: number) {
    $('.header-menu ul a').removeClass('active');
    if (tabNo === 1 ) {
      $('#stenoTabNo1').addClass('active');
    } else if (tabNo === 2 ) {
      $('#stenoTabNo2').addClass('active');
    } else if (tabNo === 3 ){
      $('#stenoTabNo3').addClass('active');  
    } else {
      $('#stenoTabNo4').addClass('active');  
    }
    this.tabNo = tabNo;
    // console.log(this.tabNo);
  }
}
