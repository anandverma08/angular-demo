import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../../interfaces/users';
import { UserServiceService } from '../../services/user-service.service';
import { CanComponentDeactivate } from '../../guards/confirmation/confirmation.guard';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, CanComponentDeactivate {
  users: Iuser[];
  user: Iuser;
  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.getUsersFromAPIObservable().subscribe(user => {
      this.users = user;
    });
  }

  userClicked(user: Iuser) {
    this.user = user;
  }

  canDeactivateRoute() {
    return confirm('Are you sure you want to go away?');
  }

}
