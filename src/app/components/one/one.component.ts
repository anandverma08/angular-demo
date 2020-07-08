import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  _prop:string;
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
  this.userService.setSubject.subscribe(prop=>{
    this._prop=prop;
  });
  }

  onChange(){
    this.userService.setProp('bar');
    
  }
}
