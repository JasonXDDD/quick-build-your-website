import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor(private http: Http){
    localStorage.setItem('pageList', '[]');
    http.get('app/template.json').subscribe( result =>{
      console.log(result.json());
      localStorage.setItem('templateList', JSON.stringify(result.json()));
    })
  }
}
