import { Component, OnInit } from '@angular/core';

declare var lightGallery: any;

@Component({
  selector: 'photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var galleries = document.getElementsByClassName('lightgallery');
       
    for (var i = 0; i < galleries.length; i++) {
      lightGallery(galleries[i], {
        "selector": ".photo"
      });
    }
  }

}
