import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-slider',
  templateUrl: './full-slider.component.html',
  styleUrls: ['./full-slider.component.css']
})
export class FullSliderComponent implements OnInit {
  user: any;
  template: any;

  page: any;
  module: any;
  title: any;
  content: any;
  slide: any;
  navList: any;

  constructor(private http: Http, private router: Router) {
    this.user = sessionStorage.getItem("user");
    var templateList = JSON.parse(sessionStorage.getItem("templateList"));
    this.template = templateList.find(item =>{
      return item.name === "Full Slider"
    })
    console.log(this.template)
  }

  ngOnInit() {
    //init bootstrap slider
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })

    this.page = JSON.parse(sessionStorage.getItem('pageSetting'));
    this.module = this.page.template.module;
    this.module.forEach(element => {
      switch(element.key){
        case 'title': this.title = element; break;
        case 'content': this.content = element; break;
        case 'slide': this.slide = element; break;
        case 'navList': this.navList = element; break;
      }
    });
  }

  pushNav(){
    this.navList.value.push({
      name: "連結",
      link: "/setting/big-pics"
    })
  }

  pushSlide(){
    this.slide.value.push({
      src: "http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg",
      content: "ZZZ"
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
}
