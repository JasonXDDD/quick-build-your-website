import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-slider',
  templateUrl: './full-slider.component.html',
  styleUrls: ['./full-slider.component.css']
})
export class FullSliderComponent implements OnInit {
  page: any;
  slide: any;
  navList: any;

  constructor() {

  }

  ngOnInit() {
    //init bootstrap slider
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })

    this.page = JSON.parse(sessionStorage.getItem('pageSetting'));
    this.slide = this.page.template.module.slide;
    this.navList = this.page.template.module.navList;
  }

  pushNav(){
    this.navList.push({
      name: "連結",
      link: "/setting/big-pics"
    })
  }

  pushSlide(){
    this.slide.push({
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
}
