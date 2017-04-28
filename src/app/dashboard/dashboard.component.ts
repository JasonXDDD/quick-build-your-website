import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private router: Router) {
    this.user = sessionStorage.getItem('user');
    if(this.user === null){
      this.router.navigate(['/login']);
    }

  }

  ngOnInit() {

  }



  doActive(event){
    var target = event.target || event.srcElement || event.currentTarget;
    $('.nav').children().removeClass('active');
    $(target).parents("li").addClass('active');
  }
}
