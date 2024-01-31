import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { Category, Product } from '../../../shared/interfaces/Product.interface';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';
import { Observable, map, pipe } from 'rxjs';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-product-home-page',
  templateUrl: './product-home-page.component.html',
  styleUrl: './product-home-page.component.css'
})
export class ProductHomePageComponent implements OnInit {

  public listProduct: Product[] = []
  public listCategory: string[] = []
  public selectedCategory: string = "none";
  public selectedProduct: Product = {} as Product;
  public deletedProduct: Product = {} as Product
  public productCounts: Record<string, number> = { "none": 0 };

  public isModalViewOpen: boolean = false;
  public isModalDeleteOpen: boolean = false;
  public isOpenNotification: boolean = false;
  public isAscOrder: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {

  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  public loadCategories() {
    this.categoryService.getAllCategories().
      subscribe((resCats) => {
        this.listCategory = resCats;
        this.loadCountProductsByCat(resCats)
      });
  }

  public loadProducts() {
    this.selectedCategory = "none";
    this.productService.getAllProducts()
      .subscribe((resProduct) => {
        this.listProduct = resProduct;

      });
  }

  public loadProductsByCategory(pCategory: string, sortMethod:string="") {
    this.selectedCategory = pCategory;
    this.categoryService.getProductByCategory(pCategory+sortMethod)
      .subscribe((resProd) => {
        this.listProduct = resProd;
      })
  }

  public loadCountProductsByCat(listCats: string[]) {
    this.listCategory.forEach(cat => {
      this.categoryService.getCountProductByCategory(cat)
        .subscribe((resLength) => {
          this.productCounts[cat] = resLength;
          this.productCounts['none'] += resLength
        });
    });
  }


  public onDeleteProduct() {
    this.productService.deleteProduct(1)
      .subscribe((prod) => {
        if (prod.id > 0) {
          console.log("delted: ", prod);
          this.deletedProduct = prod
          this.isOpenNotification = true;
        }
      })
    this.isModalDeleteOpen = false;
  }



  public onSelectProduct(sProd: Product) {
    this.selectedProduct = sProd
  }

  public openModalView() {
    this.isModalViewOpen = !this.isModalViewOpen
  }
  public openModalDelete() {
    this.isModalDeleteOpen = !this.isModalDeleteOpen
  }

  public openNotification() {
    this.isOpenNotification = !this.isOpenNotification;
  }

  public onChangeSortProducts() {
    let categorySorted =this.isAscOrder ? "?sort=asc" : "?sort=desc"
    this.isAscOrder = !this.isAscOrder;
    this.loadProductsByCategory(this.selectedCategory,categorySorted)

  }

}

