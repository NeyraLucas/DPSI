import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCorteComponent } from './modal-corte.component';

describe('ModalCorteComponent', () => {
  let component: ModalCorteComponent;
  let fixture: ComponentFixture<ModalCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
