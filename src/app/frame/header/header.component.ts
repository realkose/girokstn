
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() clickMenu: EventEmitter<any> = new EventEmitter();

  private router = ActivatedRoute;

  constructor(
   private route: ActivatedRoute, private redirector: Router
  ) { }

  ngOnInit() {
  }

  alert() {
    window.alert('준비중입니다.');
  }

  onClickMenu(menu: string) {
    $('#mainMenu li').removeClass('active');
    $('#mainMenu li a').removeClass('active');
    $('#'+menu).addClass('active');

    this.clickMenu.emit(menu);
    // console.log(menu);
      // let el = document.getElementById(menu);
      // if (el === null) {
      //   this.clickMenu.emit(menu);
      // }
  }
}
