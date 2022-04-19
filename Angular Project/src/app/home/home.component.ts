import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() fun: EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {

    this.fun.emit(2)
  }

}
