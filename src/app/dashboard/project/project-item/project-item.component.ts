import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSettingProject(){
    sessionStorage.setItem('projectSetting', JSON.stringify(this.project));
    this.router.navigate(['/pages']);
  }

}
