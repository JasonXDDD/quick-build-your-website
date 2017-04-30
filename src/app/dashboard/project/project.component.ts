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
  addProject: any;

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.doGetProject();

    this.addProject = {
      user_id: this.user.data.user_id,
      name: "",
      description: "",
      background: ""
    }
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

  doAddProject(name){
    if(name.invalid) return;

    let headers = new Headers({
      'Authorization': this.user.token,
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://huangserver.ddns.net:3031/projects', JSON.stringify(this.addProject), options)
      .subscribe(result => {
        console.log(result.json());
        location.reload();
      })
  }
}
