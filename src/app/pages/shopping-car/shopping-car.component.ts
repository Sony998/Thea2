import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TheaCookieService } from './../../services/thea-cookie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit {
  cookie = [{
    theaId:"",
    title: "",
    price: "",
    img: [],
    selectedSize: "",
    selectedColor: "",
    quantity: "",
  }];
  subtotal=0
  send=5000
  discount=5
  total=0

  constructor(private location: Location, private theaCookie: TheaCookieService) {}

  ngOnInit() {
    this.cookie = this.theaCookie.getCookie("shoppingcar");
    this.calcPrice(this.cookie)
  }

  goBack() {
    this.location.back();
  }
  remove(i:number){
    this.cookie.splice(i, 1);
    this.theaCookie.saveJsonCookie("shoppingcar",this.cookie)
  }
calcPrice(array:any){
  this.subtotal = 0
    for (let i = 0; i < array.length; i++) {
  this.subtotal += parseFloat( array[i].price);
}
this.total=((this.subtotal + this.send)/100)*(100-this.discount)
}

}
