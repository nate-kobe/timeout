import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ScoutService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})
 
export class ProfileComponent implements OnInit {
    scout: Scout;
    scoutId: number;
    loading = false;
    qr: any;
 
    constructor(
      private scoutService: ScoutService, 
      private route: ActivatedRoute
    ) {
      route.params.subscribe((params: Params) => this.scoutId = params._id);
    }
 
    ngOnInit() {
      this.loadScout();
      console.log(QRCode);
    }

    loadScout() {
      this.scoutService.detail(this.scoutId).subscribe(result => {
        this.scout = result;
        this.scout.time = {};
        this.scout.time.count = result.transactions.map(a => {
          if(a.isPositive)
            return a.time;
          else
            return 0 - a.time;
        }).reduce((a, b) => a + b, 0);
        this.loading = true;
        this.loadQR();
        this.updateTime();
      });
    }

    loadQR() {
      this.scoutService.getQR(this.scoutId).subscribe(result => {
        this.qr = result.url;
      });
    }

    private updateTime() {
      const n = 1;
      const showTime = Math.max(0, this.scout.time.count - n);
      this.scout.time.minutes = ('0' + Math.round(showTime / 60) % 60).slice(-2);
      this.scout.time.hours = ('0' + Math.round(showTime / 3600) % 24).slice(-2);
      this.scout.time.seconds = ('0' + showTime % 60).slice(-2);
    }
}