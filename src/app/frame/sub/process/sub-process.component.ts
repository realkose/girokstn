import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'sub-process',
  templateUrl: './sub-process.component.html',
  styleUrls: ['./sub-process.component.scss']
})
export class SubProcessComponent implements OnInit {

  tabNo = 1;

  constructor() { }

  ngOnInit() {

  }
  
  onClickTab(tabNo: number) {

  }
}
