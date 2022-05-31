import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformeCajaComponent } from './modal-informe-caja.component';

describe('ModalInformeCajaComponent', () => {
  let component: ModalInformeCajaComponent;
  let fixture: ComponentFixture<ModalInformeCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInformeCajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformeCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
