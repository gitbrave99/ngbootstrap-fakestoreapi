import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrl: './modal-generic.component.css'
})
export class ModalGenericComponent {


  @Input()
  public title:string="";
  @Input()
  public isModalOpen:boolean=false;

}
