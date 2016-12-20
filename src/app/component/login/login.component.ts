import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,AbstractControl } from '@angular/forms';
import { Message } from 'primeng/primeng';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private msgs: Message[] = [];
  private loginForm:FormGroup;
  private hasSubmit:boolean;
  private isLoginIDInvalid:boolean;
  private isPasswordInvalid:boolean;
  private _loginCtrl:AbstractControl;
  private _paswordCtrl:AbstractControl;

  constructor(private fb:FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
      this.loginForm = this.fb.group({
        'loginID':['',Validators.compose([Validators.required])],
        'password':['',Validators.compose([Validators.required])],
      });

      this._loginCtrl = this.loginForm.controls["loginID"];
      this._paswordCtrl = this.loginForm.controls["password"];
  }

  submitForm(value:any){

    console.log("form value is:");
    console.log(value);
    this.msgs = [];
    this.hasSubmit = true;
    
    this.onLoingIDKeyUp(null);
    this.onPasswordKeyUp(null);

    if(this.loginForm.invalid){
      return;
    }

    if(this._loginCtrl.value === "123" && this._paswordCtrl.value === "123"){
      this.msgs.push({severity:'warn', summary:'', detail:'無効なログインユーザ'});
    }

    //讲Token记录在localStorage中
    window.localStorage.setItem("token", "1234");

    this.router.navigate(["/index"]);
  }

  onLoingIDKeyUp(event){
    this.isLoginIDInvalid = (this._loginCtrl.invalid && this._loginCtrl.dirty) || (this.hasSubmit && this._loginCtrl.invalid);
  }

  onPasswordKeyUp(event){
    this.isPasswordInvalid = (this._paswordCtrl.invalid && this._paswordCtrl.dirty) || (this.hasSubmit && this._paswordCtrl.invalid);;
  }
}
