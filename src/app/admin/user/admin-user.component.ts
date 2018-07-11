import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService, ScoutService } from '../../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: './admin-user.component.html'
})

export class AdminUserComponent implements OnInit {
  title = 'HERENS';
  users: User[];
  loaded: boolean = false;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users
      this.loaded = true;
    });
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(user => {
      this.loadUsers();
    });
  }
}
