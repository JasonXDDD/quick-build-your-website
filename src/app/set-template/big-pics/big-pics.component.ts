import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-pics',
  templateUrl: './big-pics.component.html',
  styleUrls: ['./big-pics.component.css']
})
export class BigPicsComponent implements OnInit {
  page: any;
  navList: any;
  module: any;
  title: any;
  content: any;
  background: any;


  constructor() { }

  ngOnInit() {
    this.page = JSON.parse(sessionStorage.getItem('pageSetting'));


    this.module = this.page.template.module;
    this.module.forEach(element => {
      switch(element.key){
        case 'title': this.title = element;
        case 'content': this.content = element;
        case 'background': this.background = element;
        case 'navList': this.navList = element;
      }
    });

    console.log('yoo')
    console.log(this.navList);
  }

  doSettingPage(){


    sessionStorage.setItem('pageSetting', JSON.stringify(this.page));
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
