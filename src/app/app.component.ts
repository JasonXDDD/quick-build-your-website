import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private http: Http) {
    // wow init
    new WOW().init();

    // sessionStorage.clear();
    sessionStorage.setItem('pageList', `[]`);
    http.get('app/template.json').subscribe(result => {
      console.log(result.json());
      sessionStorage.setItem('templateList', JSON.stringify(result.json()));
    })
  }
}
