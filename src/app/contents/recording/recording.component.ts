import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alert() {
    window.alert('준비중입니다.');
  }
  
}
