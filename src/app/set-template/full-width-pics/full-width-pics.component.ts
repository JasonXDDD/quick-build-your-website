import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-width-pics',
  templateUrl: './full-width-pics.component.html',
  styleUrls: ['./full-width-pics.component.css']
})
export class FullWidthPicsComponent implements OnInit {
  user: any;
  template: any;

  page: any;
  module: any;
  title: any;
  content: any;
  logo: any;
  background: any;
  navList: any;
  section: any;

  constructor(private http: Http, private router: Router) {
    this.user = sessionStorage.getItem("user");
    var templateList = JSON.parse(sessionStorage.getItem("templateList"));
    this.template = templateList.find(item => {
      return item.name === "Full Width Pics"
    })
  }

  ngOnInit() {
    this.page = JSON.parse(sessionStorage.getItem('pageSetting'));
    this.module = this.page.template.module;
    this.module.forEach(element => {
      switch (element.key) {
        case 'title': this.title = element; break;
        case 'background': this.background = element; break;
        case 'content': this.content = element; break;
        case 'logo': this.logo = element; break;
        case 'navList': this.navList = element; break;
        case 'section': this.section = element; break;
      }
    });
  }

  pushNav() {
    this.navList.value.push({
      name: "連結",
      link: "/setting/big-pics"
    })
  }

  pushText() {
    this.section.value.push({
      type: "text",
      heading: "Section Heading",
      lead: "string",
      paragraph: "string"
    })
  }

  pushImage(){
    this.section.value.push({
      type: "image",
      src: "string"
    })
  }

  deleteData(index, target) {
    console.log(target.length);
    if (target.length > 1)
      target.splice(index, 1);
    else
      alert("must have one!!");
  }

  checkIsChanged(target) {
    var template_Target = this.template.module.find(item => {
      return item.key === target.key;
    })
    if (JSON.stringify(target.value) === JSON.stringify(template_Target.value)) target.isSet = 0;
    else target.isSet = 1;
  }

  doSettingPage() {
    let headers = new Headers({
      'Authorization': this.user.token,
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    this.http.put('http://huangserver.ddns.net:3031/pages/finish/', '[' + JSON.stringify(this.page) + ']', options)
      .subscribe(result => {
        console.log(result.json());
        sessionStorage.setItem('pageSetting', JSON.stringify(this.page));
        this.router.navigate(['/pages']);
      })
  }

}
