import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Timer = NodeJS.Timer;

import { Scout } from '../_models/index';
import { ScoutService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})
 
export class ProfileComponent implements OnInit {
    scout: Scout;
    scoutId: string;
    loading = false;
    qr: any;
    _to: Timer;
    n: number;
 
    constructor(
      private scoutService: ScoutService,
      private route: ActivatedRoute
    ) {
      route.params.subscribe(params => this.scoutId = params._id);
      const init = new Date(2018, 6, 14).getTime();
      console.log('Profile');
      console.log(init);
      const now = new Date().getTime();
      console.log(now);
      this.n = Math.floor((now - init)/1000);
      console.log(this.n);
    }
 
    ngOnInit() {
      this.loadScout();
      this._to = setInterval(() => this.updateTime(), 1000);
    }

    loadScout() {
      this.scoutService.detail(this.scoutId).subscribe((result: Scout) => {
        this.scout = result;
        this.scout.time = {};
        this.scout.time.count = result.transactions.map(a => {
          if(a.isPositive)
            return a.time;
          else if(!a.isPositive)
            return 0 - a.time;
        }).reduce((a, b) => a + b, 0) + 100000;
        this.loadQR();
        console.log(this.scout.time);
        this.updateTime();
        console.log(this.scout);
      });
    }

    loadQR() {
      this.scoutService.getQR(this.scout.uid).subscribe(result => {
        this.qr = result;
        this.loading = true;
      });
    }

    private updateTime() {
      this.n++;
      const showTime = Math.max(0, this.scout.time.count - this.n);
      this.scout.time.days = Math.floor(showTime / 86400);
      this.scout.time.minutes = ('0' + Math.floor(showTime / 60) % 60).slice(-2);
      this.scout.time.hours = ('0' + Math.floor(showTime / 3600) % 24).slice(-2);
      this.scout.time.seconds = ('0' + showTime % 60).slice(-2);
    }
}
