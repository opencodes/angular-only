﻿import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html'
})
export class SchedulingComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
      console.log('SchedulingComponent OnInit');
  }

}
