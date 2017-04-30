import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-pics',
  templateUrl: './big-pics.component.html',
  styleUrls: ['./big-pics.component.css']
})
export class BigPicsComponent implements OnInit {
  user: any;
  template: any;

  page: any;
  module: any;
  navList: any;
  title: any;
  content: any;
  background: any;

  constructor(private http: Http, private router: Router) {
    this.user = sessionStorage.getItem("user");
    var templateList = JSON.parse(sessionStorage.getItem("templateList"));
    this.template = templateList.find(item =>{
      return item.name === "Big Pics"
    })
  }

  ngOnInit() {
    this.page = JSON.parse(sessionStorage.getItem('pageSetting'));
    this.module = this.page.template.module;
    this.module.forEach(element => {
      switch(element.key){
        case 'title': this.title = element; break;
        case 'content': this.content = element; break;
        case 'background': this.background = element; break;
        case 'navList': this.navList = element; break;
      }
    });
  }

  doSettingPage(){
    let headers = new Headers({
      'Authorization': this.user.token,
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    this.http.put('http://huangserver.ddns.net:3031/pages/finish/', '[' + JSON.stringify(this.page) + ']', options)
      .subscribe(result =>{
        console.log(result.json());
        sessionStorage.setItem('pageSetting', JSON.stringify(this.page));
        this.router.navigate(['/pages']);
      })
  }

  pushNav(){
    this.navList.value.push({
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

  checkIsChanged(target){
    var template_Target = this.template.module.find(item => {
      return item.key === target.key;
    })
    if(JSON.stringify(target.value) === JSON.stringify(template_Target.value)) target.isSet = 0;
    else target.isSet = 1;
  }
}
