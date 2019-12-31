import { Component, OnInit, Input, Directive } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: any;

  constructor(
    private formBuilder: FormBuilder,
    
    private auth: AuthenticationService
     ) { 
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })

  }

  ngOnInit() {
  }

  onSubmit(formInfo){
    this.auth.authenticate(formInfo.username,formInfo.password)
    .subscribe((response)  => {
      console.log("Reponse:"+response.toString());
    })
  }

  

}
