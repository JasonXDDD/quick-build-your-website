import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-slider',
  templateUrl: './full-slider.component.html',
  styleUrls: ['./full-slider.component.css']
})
export class FullSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
  }

}
