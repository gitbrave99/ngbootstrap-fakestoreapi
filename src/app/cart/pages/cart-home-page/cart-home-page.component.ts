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
  public sortBy: string = 'asc';
  public rowPerPage: string = '';

  public isLoading: boolean = false;

  public listCarts: Cart[] = []
  public totalProducts: number = 0;
  public totalquantity: number = 0;

  public startDate: string = '';
  public endDate: string = '';

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log(new Date().toISOString().substring(0, 10));
    this.getAllCarts()


  }

  getAllCarts() {
    this.reloadingData()
    this.cartService.getCarts().subscribe({
      next: (data) => {
        this.listCarts = data;
        console.log("vrio ", data);

        this.getTotalCarts()
      },
      error: () => { },
      complete: () => {
        this.isLoading = false
      }
    })
  }

  getTotalCarts() {
    console.log("cargando total cars");
    
    this.totalProducts = this.listCarts.reduce((acumularor: number, item: Cart) => {
      return acumularor + item.products.length
    }, 0);

    this.totalquantity = this.listCarts.reduce((acumularor: number, item: Cart) => {
      return acumularor + item.products.reduce((total: number, product: Product) => {
        return total + product.quantity
      }, 0)
    }, 0);
  }


  getCartsByRange() {
    if (this.startDate.length > 0 && this.endDate.length > 0) {
      this.reloadingData()
      this.cartService.getCartsByRange(this.startDate, this.endDate)
        .subscribe({
          next: (carts) => {
            this.listCarts = carts;
          },
          complete: () => {
            this.isLoading = false
          }
        });


    }
  }



  getCartsSortByRowsPage() {
    this.reloadingData();
    this.startDate="";
    this.endDate="";
    this.cartService.getCartsSortRows(this.sortBy, this.rowPerPage)
      .subscribe({
        next: (carts) => {
          this.listCarts = carts;
          if (carts) {
            this.getTotalCarts();
          }
        },
        complete: () => {
          this.isLoading = false
        }
      });


  }

  changeSortBy() {
    this.isAscOrder = !this.isAscOrder;
    this.sortBy = this.isAscOrder ? "asc" : "desc"
    this.getCartsSortByRowsPage()
  }



  getTotalQuantityByCart(prod: Product[]) {
    console.log("ejecucion antes PIPE");
    const toal = prod.reduce((acumulator: number, item: Product) => {
      return acumulator + item.quantity
    }, 0)
    return toal;

  }


  reloadingData() {
    this.isLoading = !this.isLoading
    this.totalProducts = 0;
    this.totalquantity = 0;
  }
}
