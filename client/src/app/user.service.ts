import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import {User} from "./user/user"
import "rxjs"
@Injectable()
export class UserService {

  constructor(private http: Http) { }
 registration (user:User){
   return this.http.post("/register",user)
      .map(data => data.json())
      .toPromise()
 }

  login (user:User){
   return this.http.post("/login",user)
      .map(data => data.json())
      .toPromise()
 }
  // get_all_users(){
  //   return this.http.get("/all_users")
  //           .map(data => data.json())
  //           .toPromise()
  // }
  //   get_logged_in_users(){
  //   return this.http.get("/get_logged_in_users")
  //           .map(data => data.json())
  //           .toPromise()
  // }
}
