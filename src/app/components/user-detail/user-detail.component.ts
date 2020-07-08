import { Component, OnInit, Input } from '@angular/core';
import { Iuser } from '../../interfaces/users';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user : Iuser;
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
  
  }
  createUser() {
    this.userService.UpdateUser(this.user).subscribe(
      user => alert('User Created'),
      err => alert('user not created')
    )
  }

}
