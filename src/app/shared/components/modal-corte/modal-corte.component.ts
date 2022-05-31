import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { startWith, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CorteService } from 'src/app/services/corte.service';

@Component({
  selector: 'app-modal-corte',
  templateUrl: './modal-corte.component.html',
  styleUrls: ['./modal-corte.component.scss'],
})
export class ModalCorteComponent implements OnInit, OnDestroy {
  total: number = 0;
  public miFormulario!: FormGroup;
  private _subscription!: Subscription;
  name: string = '';
  constructor(
    private serviceCorte: CorteService,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private readonly authF: AuthService,
    public dialog: MatDialogRef<ModalCorteComponent>,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getUser();
    console.log(this.data);

    this.miFormulario = this._myInitialForm();
    this.reactToContado();
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private _myInitialForm() {
    return new FormGroup({
      contado: new FormControl(0, [Validators.required]),
      calculado: new FormControl(this.data, [Validators.required]),
      diferencia: new FormControl(0, [Validators.required]),
      usuario: new FormControl(this.name),
      caja: new FormControl(1),
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

  getUser() {
    this.authF.user$.subscribe((data) => {
      this.name = data!.name;
    });
  }

  save() {
    try {
      this.serviceCorte.GenerateCorte(this.miFormulario.value);
      this.dialog.close();
      this.toast.success({
        detail: 'Success',
        summary: `Sucess`,
        duration: 5000,
      });
    } catch (err) {
      this.toast.error({detail:"Error corte", summary:`Error: ${err}`, duration:5000})
    }
  }
}
