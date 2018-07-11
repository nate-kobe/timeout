import { Component, OnInit } from '@angular/core';

import { Scout } from '../../_models/index';
import { ScoutService } from '../../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'list.component.html'
})
 
export class AdminScoutListComponent implements OnInit {
    scouts: Scout[] = [];

    constructor(private scoutService: ScoutService) {
      
    }
 
    ngOnInit() {
      this.loadScouts();
    }

    loadScouts() {
      this.scoutService.list().subscribe(scouts => {
        this.scouts = scouts;
      });
    }
}