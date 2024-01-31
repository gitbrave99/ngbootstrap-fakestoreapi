import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent<T extends Record<string,any>> {


  public header:string[]=["Id","Categoria"]

  public simpleListData:string[]= ['electronics', 'jewelery', "men's clothing", "women's clothing"]

  @Input()
  public listData:T[] =[]

  public getObjectKeys(pObj:T):string[]{
    return Object.keys(pObj);
  }

  public getHeader(pObj:T):string[]{
    return Object.keys(pObj);
  }

}
