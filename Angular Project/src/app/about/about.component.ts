import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  formorequery: boolean
  b = false;

  forquery() { if (this.formorequery) { this.formorequery = false; } { this.formorequery = true; } }

  button() { this.b = true }

}
