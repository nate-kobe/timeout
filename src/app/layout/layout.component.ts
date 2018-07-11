import { Component, OnInit } from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './layout.component.html'
})

export class LayoutComponent {
  title = 'HERENS';
  _to: Time;
  now: any;

  constructor() {
    this._to = setInterval(() => this.now = Date(), 1000);
  }
}
