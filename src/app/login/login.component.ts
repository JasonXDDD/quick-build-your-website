import { EqualValidator } from './../equal-validator.directive';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user: any;


  constructor(private http: Http, private router: Router) {
    this.user = {
      email: "",
      password: ""
    }
  }

  ngOnInit() {
    this.viewInit();

  }

  viewInit() {
    $('.toggle').on('click', function () {
      $('.container').stop().addClass('active');
    });

    $('.close').on('click', function () {
      $('.container').stop().removeClass('active');
    });

  }

  loginUser(pwd, email){
    if(pwd.invalid || email.invalid) return;

    console.log(JSON.stringify(this.user));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://huangserver.ddns.net:3031/auth/local', JSON.stringify(this.user), options)
      .subscribe(
        result => {
          console.log(result.json())
          sessionStorage.setItem("user", JSON.stringify(result.json()));
          this.router.navigate(['/dashboard']);
        },
        result => {
          alert("Email 或是 password 錯誤");
        })
  }

  createUser(pwd, email) {
    if(pwd.invalid || email.invalid) return;


    console.log(JSON.stringify(this.user));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    this.http.post('http://huangserver.ddns.net:3031/users', JSON.stringify(this.user), options)
      .subscribe(
        result => {
          if(result.status < 300){
            location.reload();
          }
        },
        result => {
          alert("此email已經註冊過了")
        })
  }
}
