import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { DeliveryOption } from "./delivery-option.model";
import { CachcingServiceBase } from "./caching.service";
import {Bicycle} from "./bicycle"

@Injectable()
export class productService extends CachcingServiceBase {
  private products: Observable<Bicycle[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Bicycle[]> {  
    return this.cache<Bicycle[]>(() => this.products,
                                        (val: Observable<Bicycle[]>) => this.products = val,
                                        () => this.http
                                                  .get("/getAllBikes")
                                                  .map((response) => response.json()
                                                                             .map((item) => {
                                                                                let model = new Bicycle();
                                                                                model.updateFrom(item);
                                                                                return model;
                                                                              })));

  }
                                                                            
}
