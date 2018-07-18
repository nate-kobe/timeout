import { Component, OnInit } from '@angular/core';
import Timer = NodeJS.Timer;
import { User, Scout } from '../_models/index';
import { UserService, ScoutService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    _to: Timer;

    currentUser: User;
    users: User[] = [];
    scouts: Scout[][] = [];
    n: number = 0;
    now: any;
 
    constructor(private userService: UserService, private scoutService: ScoutService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const init = new Date(2018, 6, 14).getTime();
      console.log('Profile');
      console.log(init);
      const now = new Date().getTime();
      console.log(now);
      this.n = Math.floor((now - init)/1000);
      console.log(this.n);
      setTimeout(() => {
        this.n = this.n + 1;
      }, 10);
    }
 
    ngOnInit() {
      this.loadAllUsers();
      this.loadAllScouts();
      console.log('Init');
      this._to = setInterval(() => this.updateTime(), 1000);
    }
 
    deleteUser(_id: string) {
      this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadAllScouts() {
      const reducer = (a,b) => a.time + b.time;
      this.scoutService.list().subscribe(result => {
        const scouts = result.filter(function(s){
          return s.firstName !== undefined && s.firstName.length > 0;
        }).map(s => {
          let scoutWTime = s;
          scoutWTime.time = {count: s.transactions.map(a => {
            if(a.isPositive)
              return a.time;
            else if(!a.isPositive)
              return 0 - a.time;
            // return a.time;
          }).reduce((a, b) => a + b, 0) + 186400};
          return scoutWTime;
        }).sort((a,b) => {return a.firstName > b.firstName ? 1 : -1;})
        console.log(scouts);
        let size = 0;
        const len = scouts.length;
        this.scouts = [];
        console.log(len);
        let i = 0;
        if (len % 3 === 0) {
          size = Math.floor(len / 3);
          console.log('not a multiple of 3');
          for(let i = 0; i < len; i++) {
            const sub = scouts.slice(i, i += size);
            this.scouts.push(sub);
          }
          
          console.log(this.scouts);
        } else {
          console.log('not a multiple of 3');
          size = Math.ceil((len - i) / 3);
          for(let i = 0; i < len; i++) {
            const sub = scouts.slice(i, i += size + 1);
            this.scouts.push(sub);
          }
          
          console.log(this.scouts);
        }
      });
    }

    private updateTime() {
      this.n++;
      for(let i = 0; i < 3; i++) {
        this.scouts[i] = this.scouts[i].map(scout => {
          let scoutUpdate: Scout = scout;
          const showTime = Math.max(0, scoutUpdate.time.count - this.n);
          scoutUpdate.time.days = Math.floor(showTime / 86400)
          scoutUpdate.time.minutes = ('0' + Math.floor(showTime / 60) % 60).slice(-2);
          scoutUpdate.time.hours = ('0' + Math.floor(showTime / 3600) % 24).slice(-2);
          scoutUpdate.time.seconds = ('0' + showTime % 60).slice(-2);
          return scoutUpdate;
        });
      }
    }
}