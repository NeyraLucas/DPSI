import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInData } from 'src/app/models/SignInData.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public singInForm!: FormGroup;
  constructor(private authFire:  AuthService) { }

  ngOnInit(): void {
    this.singInForm =this.initSignInForm();
  }

  private initSignInForm(): FormGroup{
    return new FormGroup({
      email: new FormControl(null,[Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  public signIn(signInForm:FormGroup):void {
    const emailAndPassword:SignInData = signInForm.value;
    this.authFire.login(emailAndPassword);
    
  }

}
