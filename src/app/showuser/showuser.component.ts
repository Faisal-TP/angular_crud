import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  data:any;
  result:any;

  constructor(
    private dataService:DataserviceService
  ) { }

  ngOnInit(): void {
    this.getRegisterData();
  }

  getRegisterData(){
    //console.log("heloooo");
    this.dataService.getData().subscribe(res=>{
      //console.log(res);
      this.data = res; 
      console.log(this.data);
    });
  }

  deleteuser(userid:any){
    this.dataService.deleteData(userid).subscribe(res=>{
      this.result = res;
     alert(res)
     this.getRegisterData()

    });
  }

}
