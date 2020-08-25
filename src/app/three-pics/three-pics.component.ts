import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-pics',
  templateUrl: './three-pics.component.html',
  styleUrls: ['./three-pics.component.css']
})
export class ThreePicsComponent implements OnInit {

  picsToShow = [];
  tagToFilter = null;

  tags = [
     {id: 1, tagName: "Ultras"},
     {id: 2, tagName: "Defs"},
     {id: 3, tagName: "Set"}
  ];

  allPicsData = [
     {
       "url": "https://www.instagram.com/p/CDZKcbCJknp/media/?size=l",
       "tag": "Ultras"
     },
     {
       "url": "https://www.instagram.com/p/CDg5CEFpP6y/media/?size=l",
       "tag": "Defs"
     },
     {
       "url": "https://www.instagram.com/p/CDMSmz6pSc6/media/?size=l",
       "tag": "Set"
     }
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

  filterPics() {
    for (var i = 0; i < this.allPicsData.length; i++) {
      var a = this.tagToFilter;
      var b = this.allPicsData[i].tag;

      var counter = 0;

      if(a === b) {
        this.picsToShow[counter] = this.allPicsData[i].url;
        counter++;
      }
    }
  }
}
