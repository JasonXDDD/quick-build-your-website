import { element } from 'protractor';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {
  @Input() page: any;
  @Input() user: any;


  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {

  }

  doSettingPage(){
    let headers = new Headers({
      'Authorization': this.user.token
    });
    let options = new RequestOptions({ headers: headers });

    this.http.get('http://huangserver.ddns.net:3031/pages/' + this.page.page_id, options)
      .subscribe(result =>{
        this.page = result.json();
        sessionStorage.setItem('pageSetting', JSON.stringify(this.page));
        this.router.navigate([this.page.template.route]);
      })
  }

  doRemovePage(){
    let headers = new Headers({
      'Authorization': this.user.token
    });
    let options = new RequestOptions({ headers: headers });

    this.http.delete('http://huangserver.ddns.net:3031/pages/' + this.page.page_id, options)
      .subscribe(result =>{
        location.reload();
      })
  }
}
