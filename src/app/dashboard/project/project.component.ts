import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  user: any;
  projectList: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.doGetProject();
  }

  doGetProject() {
    let headers = new Headers({
      'Authorization': this.user.token,
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    this.http.get('http://huangserver.ddns.net:3031/projects', options)
      .subscribe(result => {
        this.projectList = result.json();
        sessionStorage.setItem("projectList", JSON.stringify(this.projectList));
      })
  }
}
