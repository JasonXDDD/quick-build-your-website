import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-pics',
  templateUrl: './big-pics.component.html',
  styleUrls: ['./big-pics.component.css']
})
export class BigPicsComponent implements OnInit {
  page: any;
  navList: any;

  constructor() { }

  ngOnInit() {
    this.page = JSON.parse(localStorage.getItem('pageSetting'));
    this.navList = this.page.template.module.navList;
  }

  doSettingPage(){
    localStorage.setItem('pageSetting', JSON.stringify(this.page));
  }

  pushNav(){
    this.navList.push({
      name: "連結",
      link: "/setting/big-pics"
    })
  }
  deleteData(index, target){
    console.log(target.length);
    if(target.length > 1)
      target.splice(index, 1);
    else
      alert("must have one!!");
  }
}
