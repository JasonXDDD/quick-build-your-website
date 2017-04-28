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
  templateList: any;

  page: any;
  navList: any;
  module: any;
  title: any;
  content: any;
  background: any;

  constructor(private http: Http, private router: Router) {
    this.user = sessionStorage.getItem("user");
    this.templateList = sessionStorage.getItem("templateList");
  }

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
