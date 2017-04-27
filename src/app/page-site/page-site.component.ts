import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-site',
  templateUrl: './page-site.component.html',
  styleUrls: ['./page-site.component.css']
})
export class PageSiteComponent implements OnInit {

  pageList = [];
  user: any;


  constructor(private router: Router, private route: ActivatedRoute, private http: Http) {
  }

  ngOnInit() {
    // this.pageList = JSON.parse(sessionStorage.getItem('pageList'));
    this.user = sessionStorage.getItem('user');

    if(this.user === null){
      this.router.navigate(['/login']);
    }
    else{
      this.user = JSON.parse(this.user);
      $('.user_name')[0].innerHTML = this.user.data.email;
      this.doGetPages();

    }
  }


  doGetPages(){
    let headers = new Headers({
      'Authorization': this.user.token,
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });


    this.http.get('http://huangserver.ddns.net:3031/pages?user_id=' + this.user.data.user_id, options)
      .subscribe(result =>{
        console.log(result.json());
        this.pageList = result.json();
      })
  }


}
