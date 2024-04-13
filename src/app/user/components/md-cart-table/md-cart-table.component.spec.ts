import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCartTableComponent } from './md-cart-table.component';

describe('MdCartTableComponent', () => {
  let component: MdCartTableComponent;
  let fixture: ComponentFixture<MdCartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdCartTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MdCartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
