import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  _prop:string
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
