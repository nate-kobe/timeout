import { Component, OnInit } from '@angular/core';
import { Scout } from '../_models/index';
import { ScoutService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'checkin.component.html'
})

export class CheckinComponent implements OnInit {
  scout: any;
  scoutId: string;

  constructor(
    private scoutService: ScoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe(params => this.scoutId = params.uid);
  }

  ngOnInit() {
    this.loadScout();
  }

  loadScout() {
    console.log(this.scoutId);
    this.scoutService.detailByUid(this.scoutId).subscribe(scout => {
      this.scout = scout;
      this.router.navigate(['/profile/', this.scout._id]);
    });
  }
}