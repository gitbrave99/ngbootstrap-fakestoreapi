import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart, Product } from '../../interfaces/Cart.interface';

@Component({
  selector: 'app-cart-home-page',
  templateUrl: './cart-home-page.component.html',
  styleUrl: './cart-home-page.component.css'
})
export class CartHomePageComponent implements OnInit {
  public selectedCategory: string = "none";
  public isAscOrder: boolean = true;
  public listCarts:Cart[]=[]
  public totalProducts:number=0;
  public totalquantity:number=0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getAllCarts()
  }

  getAllCarts() {
    this.cartService.getAllCarts().subscribe({
      next: (data) => {
        this.listCarts= data;

        this.totalProducts= this.listCarts.reduce((acumularor:number, item:Cart)=>{
          return acumularor + item.products.length
        }, 0);
      
      }
    })
  }

  getTotalQuantityByCart(prod:Product[]){
    console.log("ejecucion antes PIPE");
    const toal=prod.reduce((acumulator:number, item:Product)=>{
      return acumulator + item.quantity
    },0)
     return toal;
    
  }

}
