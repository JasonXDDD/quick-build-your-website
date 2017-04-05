import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-site',
  templateUrl: './page-site.component.html',
  styleUrls: ['./page-site.component.css']
})
export class PageSiteComponent implements OnInit {

  pageList = [];


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pageList = JSON.parse(localStorage.getItem('pageList'));

  }



}
