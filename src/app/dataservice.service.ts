import { Injectable } from '@angular/core';

//updates
import {HttpClient} from '@angular/common/http';
//#updates

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  data:any;
  constructor(
    private httpClient:HttpClient
  ) { }

  insertData(data: any){
    //console.log(data);
    return this.httpClient.post('https://cybersquare.herokuapp.com/user/',data);
  }

  getData(){
    return this.httpClient.get('https://cybersquare.herokuapp.com/user/');
  }

  deleteData(id:any){
    //console.log(id)
    return this.httpClient.delete('https://cybersquare.herokuapp.com/user/'+id);
  }


}
