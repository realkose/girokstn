import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lat: number = 36.490597;
  lng: number = 127.302295;
 
  constructor() { }

  ngOnInit() {
  }

  alert() {
    window.alert('준비중입니다.');
  }
  
}
