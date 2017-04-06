import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private http: Http) {
    localStorage.setItem('pageList', `
    [
  {
    "title": "dsadsa",
    "template": {
      "name": "Big Pics",
      "src": "assets/template/big-picture/index.html",
      "route": "bigPics",
      "module": {
        "title": "這是標題",
        "content": "我說了一些話，會顯示在這裡，藍受，香菇，在這裡。",
        "background": "http://placehold.it/1920x1080",
        "navList": [
          {
            "name": "連結",
            "link": "/setting/big-pics"
          },
          {
            "name": "鏈結2",
            "link": "/setting/big-pics"
          },
          {
            "name": "臉節",
            "link": "/setting/big-pics"
          }
        ]
      }
    },
    "style": ""
  }
]`);
    http.get('app/template.json').subscribe(result => {
      console.log(result.json());
      localStorage.setItem('templateList', JSON.stringify(result.json()));
    })
  }
}
