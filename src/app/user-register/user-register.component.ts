import { Component, OnInit } from '@angular/core';
import { register } from './user-register.model';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(
    private dataService:DataserviceService
  ) { }

  ngOnInit(): void {
  }

  result:any

  resr = new register();
  
  InsertDatas(){
    this.dataService.insertData(this.resr).subscribe(res=>{
      this.result = res;
    });
  }
}
