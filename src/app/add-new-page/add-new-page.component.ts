import { Http, Headers, RequestOptions } from '@angular/http';
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
  user: any;


  constructor(private router: Router, private http: Http) {

  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.templateList = JSON.parse(sessionStorage.getItem('templateList'));

    this.page = {
      user_id: this.user.data.user_id,
      page_title: "",
      template: "",
      page_style: ""
    }

    // init
    slideInit();
    sliderFxInit();


  }

  sendNewPage() {
    let headers = new Headers({
      'Authorization': this.user.token,
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://huangserver.ddns.net:3031/pages', JSON.stringify(this.page), options)
      .subscribe(result =>{
        console.log(result);
        this.router.navigate(['/pages']);
      })

  }

}
