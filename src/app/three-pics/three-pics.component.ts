import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-pics',
  templateUrl: './three-pics.component.html',
  styleUrls: ['./three-pics.component.css']
})
export class ThreePicsComponent implements OnInit {

  eije = false;
  pics = [];
  tag = null;

  countries = [
         {id: 1, name: "United States"},
         {id: 2, name: "Australia"},
         {id: 3, name: "Canada"},
         {id: 4, name: "Brazil"},
         {id: 5, name: "England"}
       ];

  testArray = [
      {
        "url": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/97520196_527445581260784_788589469968711211_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VpvFh4XW3E0AX_4uKXC&oh=b78db56403107372ffe12e041d0c29af&oe=5F3AC6C3",
        "tag": "serch"
      },
      {
        "url": "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/101803971_1150382365327241_5492594912141822608_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Nz2Mg31qZrMAX_Z7QmK&oh=86407ae8b169db04332bbc7805e6f142&oe=5F380F0A",
        "tag": "omce"
      },
      {
        "url": "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/101803971_1150382365327241_5492594912141822608_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Nz2Mg31qZrMAX_Z7QmK&oh=86407ae8b169db04332bbc7805e6f142&oe=5F380F0A",
        "tag": "amigos"
      }
  ]


  constructor() {
      for (var i = 0; i < this.testArray.length; i++) {
        if(this.testArray[i].tag === "omce") {

        }
      }

      this.pics[0] = "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/97520196_527445581260784_788589469968711211_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VpvFh4XW3E0AX_4uKXC&oh=b78db56403107372ffe12e041d0c29af&oe=5F3AC6C3";
      this.pics[1] = "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/95386033_277320893436140_8041194849706441044_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=108&_nc_ohc=r5zETPHr5NYAX9-lmNT&oh=0d19618f32cbbd7b76f26fb8679794b5&oe=5F381854";
      this.pics[2] = "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/101803971_1150382365327241_5492594912141822608_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Nz2Mg31qZrMAX_Z7QmK&oh=86407ae8b169db04332bbc7805e6f142&oe=5F380F0A";
  }

  ngOnInit(): void {

  }

  show() {
    //this.eije = !this.eije;
    alert(this.tag);
  }






  //myArray.id3 = 400;
  //myArray["id4"] = 500;




}
