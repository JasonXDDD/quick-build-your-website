import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {

  @Input() page: any;

  constructor() { }

  ngOnInit() {
  }

  doSettingPage(){
    localStorage.setItem('pageSetting', JSON.stringify(this.page));
  }

}
