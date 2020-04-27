import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'sub-info',
  templateUrl: './sub-info.component.html',
  styleUrls: ['./sub-info.component.scss']
})
export class SubInfoComponent implements OnInit {

  tabNo = 1;

  constructor() { }

  ngOnInit() {

  }
  
  onClickTab(tabNo: number) {
    $('.header-menu ul a').removeClass('active');
    if (tabNo === 1 ) {
      $('#infoTabNo1').addClass('active');
    } else if (tabNo === 2 ) {
      $('#infoTabNo2').addClass('active');
    } else {
      $('#infoTabNo3').addClass('active');  
    }
    this.tabNo = tabNo;
    // console.log(this.tabNo);
  }
}
