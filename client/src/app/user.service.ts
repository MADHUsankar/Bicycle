import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import {User} from "./user/user"
import {Bicycle} from "./bicycle"
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
   addBike (bike){
   return this.http.post("/addbike",bike)
      .map(data => data.json())
      .toPromise()
 }
 
 updateBike(bike){
   return this.http.post("/bikes/updateBike",bike)
      .map(data => data.json())
      .toPromise()
 }
 getOneProduct(product_title){
    return this.http.get("/products/"+product_title).map(data=>data.json()).toPromise()
  }
  deleteBike(bike){
   return this.http.post("/bikes/deleteBike",bike)
      .map(data => data.json())
      .toPromise()
 }
   getAllUserBikes (){
   return this.http.get("/getAllUserBikes")
      .map(data => data.json())
      .toPromise()
 }

 checkadmin(){
   console.log("admin service")
   return this.http.get("/checkadmin") .map(data => data.json())
      .toPromise()
      
 }

    getAllBikes (){
   return this.http.get("/getAllBikes")
      .map(data => data.json())
      .toPromise()
 }
  
// public addItem(bicycle: Bicycle, quantity: number): void {
//     const cart = this.retrieve();
//     let item = cart.items.find((p) => p.productId === product.id);
//     if (item === undefined) {
//       item = new CartItem();
//       item.productId = product.id;
//       cart.items.push(item);
//     }

 
//   private retrieve(): ShoppingCart {
//     const cart = new ShoppingCart();
//     const storedCart = this.storage.getItem(CART_KEY);
//     if (storedCart) {
//       cart.updateFrom(JSON.parse(storedCart));
//     }
}
