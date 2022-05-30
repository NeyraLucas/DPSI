import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { startWith, Subscription, take } from 'rxjs';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-modal-corte',
  templateUrl: './modal-corte.component.html',
  styleUrls: ['./modal-corte.component.scss'],
})
export class ModalCorteComponent implements OnInit, OnDestroy {
  total: number = 0;
  public miFormulario!: FormGroup;
  private _subscription!: Subscription;

  constructor(
    private serviceOrdenes: OrdenesService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {
    console.log(this.data);

    this.miFormulario = this._myInitialForm();
    this.reactToContado();
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }



  private  _myInitialForm() {
    return  new FormGroup({
      contado: new FormControl(0, [Validators.required]),
      calculado: new FormControl({value: this.data, disabled:true} ,[Validators.required]),
      diferencia: new FormControl({value: 0, disabled:true}, [Validators.required]),
    });
  }

  private reactToContado(): void {
    const { contado, calculado, diferencia } = this.miFormulario.controls;
    this._subscription = contado.valueChanges
      .pipe(startWith(contado.value))
      .subscribe({
        next: (contadoValue) => {
          const myDifference = calculado.value - contadoValue;
          diferencia.setValue(myDifference);
        },
      });
  }
}
