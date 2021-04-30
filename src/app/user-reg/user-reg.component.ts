import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';



@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
