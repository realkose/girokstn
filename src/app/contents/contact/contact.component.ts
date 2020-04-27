import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import * as firebase from "firebase";

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

  onSubmit(newName, newContact, newEmail, newDesc, e) {
      e.preventDefault();
      // console.log('Hello', newName, newContact, newEmail, newDesc);
        firebase.firestore().collection('contact').add({
            newName,
            newContact,
            newEmail,
            newDesc
        }).then(r => {
            console.log(r);
            alert('문의사항이 정상적으로 접수되었습니다.');
        });
  }}