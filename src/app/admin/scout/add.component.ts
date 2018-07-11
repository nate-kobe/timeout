import { Component, OnInit } from '@angular/core';

import { Scout } from '../../_models/index';
import { ScoutService } from '../../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'add.component.html'
})
 
export class AdminScoutAddComponent implements OnInit {
  form: any = {};

  constructor(private scoutService: ScoutService) {}

  ngOnInit() {

  }

  handleSubmit() {
    console.log('Adding scout: ');
    console.log(this.form);
    this.scoutService.insert(this.form).subscribe(scout => this.form = scout);
  }
}
