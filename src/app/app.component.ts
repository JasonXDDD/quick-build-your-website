import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private http: Http) {
    sessionStorage.setItem('pageList', `[
            {
          "pageID": "",
          "title": "XD",
          "template": {
              "name": "Big Pics",
              "route": "/setting/bigPics",
              "module": {
                  "title": "這是標題",
                  "content": "我說了一些話，會顯示在這裡，藍受，香菇，在這裡。",
                  "background": "http://placehold.it/1920x1080",
                  "navList": [
                      { "name": "連結", "link": "/setting/big-pics" },
                      { "name": "鏈結2", "link": "/setting/big-pics" },
                      { "name": "臉節", "link": "/setting/big-pics" }
                  ]
              }
          },
          "style": ""
      },
       {
          "pageID": "",
          "title": "XD",
          "template": {
            "name": "Full Slider",
            "route": "/setting/fullSlider",
            "module": {
              "title": "this is titile",
              "content": "I want to say sonething, but I don't know what I do",
              "slide": [
                { "src": "http://placehold.it/1920x1080", "content": "XDDD" },
                { "src": "http://placehold.it/1900x1080&text=Slide", "content": "132" },
                { "src": "http://placehold.it/1900x1080&text=XDDDDD", "content": "546" }
              ],
              "navList": [
                { "name": "連結", "link": "/setting/big-pics"},
                { "name": "鏈結2", "link": "/setting/big-pics"},
                { "name": "臉節", "link": "/setting/big-pics"}
              ]
            }
          },
          "style": ""
      },
      {
          "pageID": "",
          "title": "XD",
          "template": {
            "name": "Full Width Pics",
            "route": "/setting/fullWidthPics",
            "module": {

            }
          },
          "style": ""
      }
    ]`);
    http.get('app/template.json').subscribe(result => {
      console.log(result.json());
      sessionStorage.setItem('templateList', JSON.stringify(result.json()));
    })
  }
}
