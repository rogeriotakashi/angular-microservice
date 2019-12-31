import { Component, OnInit, Input, Directive } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@core/authentication/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
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
    // let observable = this.http.post('http://localhost:8084/api/auth/authenticate');

    // observable.subscribe((response) => console.log(response));
  }

  

}
