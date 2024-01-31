import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-home-page',
  templateUrl: './category-home-page.component.html',
  styleUrl: './category-home-page.component.css'
})
export class CategoryHomePageComponent implements OnInit{

  public listCategory:string[]=[]

  constructor(
    private catService:CategoryService
  ) {
    console.log("cats");
    
  }
  ngOnInit(): void {
    this.catService.getAllCategories()
    .subscribe((resCategories)=>{
      this.listCategory= resCategories;
      console.log("fetcin cats");
      
    })
  }



}
