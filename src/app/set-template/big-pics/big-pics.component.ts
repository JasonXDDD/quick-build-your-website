import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-pics',
  templateUrl: './big-pics.component.html',
  styleUrls: ['./big-pics.component.css']
})
export class BigPicsComponent implements OnInit {
  page: {};

  constructor() { }

  ngOnInit() {
    this.page = JSON.parse(localStorage.getItem('pageSetting'));
  }

  doSettingPage(){
    localStorage.setItem('pageSetting', JSON.stringify(this.page));
  }
}
