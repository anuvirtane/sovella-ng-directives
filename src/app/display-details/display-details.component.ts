import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
textVisible: boolean = false;
btnClickCount: number = 0;
loki = [];
  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(){
    this.loki.push(new Date());
    this.btnClickCount++;
   this.textVisible = !this.textVisible;

  }
/*
  paintItBlack() {
    if (this.btnClickCount >= 4) {
      return 'black';
    }
      return 'rgb(7, 177, 245)';


    }*/
  }



