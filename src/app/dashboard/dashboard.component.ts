import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doActive(event){
    var target = event.target || event.srcElement || event.currentTarget;
    $('.nav').children().removeClass('active');
    $(target).parents("li").addClass('active');
  }
}
