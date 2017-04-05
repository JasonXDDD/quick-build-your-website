import { Component, OnInit } from '@angular/core';
import { slideInit, sliderFxInit } from './init';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-page',
  templateUrl: './add-new-page.component.html',
  styleUrls: ['./add-new-page.component.css']
})
export class AddNewPageComponent implements OnInit {
  page: any;
  templateList: any;


  constructor(private router: Router) {
    this.page = {
      title: "",
      template: "",
      style: ""
    }
    this.templateList = JSON.parse(localStorage.getItem('templateList'));
  }

  ngOnInit() {
    // init
    slideInit();
    sliderFxInit();


  }

  sendNewPage() {
    // console.log(JSON.stringify(this.page));
    let pageList = JSON.parse(localStorage.getItem('pageList'));
    pageList.push(this.page);

    localStorage.setItem('pageList', JSON.stringify(pageList));
    this.router.navigate(['/pages']);
  }

}
