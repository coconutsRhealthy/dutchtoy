import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eije',
  templateUrl: './eije.component.html',
  styleUrls: ['./eije.component.css']
})
export class EijeComponent {

  jottem = "aap";
  users = [];

  constructor() {
    this.jottem = "werken";
    this.users[0] = "mark";
    this.users[1] = "piet";
    this.users[2] = "henry";
  }

  doShit() {
    alert("sheize");
  }

  onClick() {
    alert("traag");
  }



}
