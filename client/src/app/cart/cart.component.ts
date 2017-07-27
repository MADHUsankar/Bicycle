// import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router"
 import {UserService} from "./../user.service"
 import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
 import {ShoppingCartService} from "./../shoppingcart.service"
import {Bicycle} from "./../bicycle"
import { User } from '.././user/user';
import { Observable } from "rxjs/Observable";
// import {ShoppingCartService} from "./../shoppingcart.service"
import { ShoppingCart } from "./../shoppingCart.model";
import { Subscription } from "rxjs/Subscription"; 
import { Observer } from "rxjs/Observer";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public products: Observable<Bicycle[]>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
public title: string[];
  private cartSubscription: Subscription;

  public constructor(private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    
    this.cart = this.shoppingCartService.get();
    // this.cartSubscription = this.cart.subscribe((cart) => {
    //   this.title = cart.items.map((x) => x.title) 
      this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    });
  }
 

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
