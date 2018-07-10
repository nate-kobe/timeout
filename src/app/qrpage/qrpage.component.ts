import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScoutService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'qrpage.component.html',
    styleUrls: ['./qrpage.component.css']
})
 
export class QRComponent implements OnInit { 
    codes: any;

    constructor(
      private scoutService: ScoutService
    ) {

    }
 
    ngOnInit() {
      this.loadQR();
    }

    loadQR() {
      this.scoutService.listQR().subscribe(result => this.codes = result);
    }
}