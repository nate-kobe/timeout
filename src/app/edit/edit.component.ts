import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Scout } from '../_models/index';
import { ScoutService } from '../_services/index';
 
@Component({
  moduleId: module.id,
  templateUrl: 'edit.component.html'
})
 
export class EditComponent implements OnInit {
  form: any = {};
  scoutId: string;
  loaded: false;
  transaction: any = {isPositive: true};

  constructor(
    private scoutService: ScoutService, 
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params: Params) => this.scoutId = params._id);
  }

  ngOnInit() {
    this.loadScout();
  }

  editScout() {
    this.scoutService.update(this.form._id, this.form).subscribe(console.log('update ok'));
  }

  loadScout() {
    this.scoutService.detail(this.scoutId).subscribe(scout => {
      this.form = scout;
      this.loaded = true;
    });
  }

  addTransaction() {
    this.scoutService.addTransaction(this.form._id, this.transaction).subscribe(result =>{
      this.loadScout();
    });
  }

  deleteTransaction(_id) {
    this.scoutService.deleteTransaction(this.form._id, _id).subscribe(result =>{this.loadScout();});
  }
}