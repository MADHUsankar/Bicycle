import { User } from "././user/user";

export class Bicycle {
    public title: string = '';
    public description: string = '';
    public price: number = null;
    public image: string = null;
    public location: string = '';
    public user_id: string = '';
     
  public updateFrom(src: Bicycle): void {
    this.title = src.title;
     
    this.description = src.description;
    this.price = src.price;
     this.image=src.image
    
  }
}