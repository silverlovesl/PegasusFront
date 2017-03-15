import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Message } from 'primeng/primeng';
import { Router } from "@angular/router";
import { LoginService } from '../../service/login.service';
import { Authorization } from '../../shared/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private msgs: Message[] = [];
  private loginForm: FormGroup;
  private auth: Authorization;
  private hasSubmit: boolean;
  private isLoginIDInvalid: boolean;
  private isPasswordInvalid: boolean;
  private _loginCtrl: AbstractControl;
  private _paswordCtrl: AbstractControl;

  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'loginID': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
    });

    this._loginCtrl = this.loginForm.controls["loginID"];
    this._paswordCtrl = this.loginForm.controls["password"];
  }

  submitForm(value: any) {

    console.log("form value is:");
    console.log(value);
    this.msgs = [];
    this.hasSubmit = true;

    this.onLoingIDKeyUp(null);
    this.onPasswordKeyUp(null);

    if (this.loginForm.invalid) {
      return;
    }

    //　执行Login
    this.loginService
      .loginAuth(this._loginCtrl.value, this._paswordCtrl.value)
      .subscribe(res => {
        this.auth = res;
        window.localStorage.setItem("token", this.auth.Token);
        // 如果Login成功则转向主页面
        if (this.auth.Success) {
          this.router.navigate(["/index"]);
        }
      });
  }

  onLoingIDKeyUp(event) {
    this.isLoginIDInvalid = (this._loginCtrl.invalid && this._loginCtrl.dirty) || (this.hasSubmit && this._loginCtrl.invalid);
  }

  onPasswordKeyUp(event) {
    this.isPasswordInvalid = (this._paswordCtrl.invalid && this._paswordCtrl.dirty) || (this.hasSubmit && this._paswordCtrl.invalid);;
  }
}
