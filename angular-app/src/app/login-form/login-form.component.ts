import { Component, OnInit, Input, Directive } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: any;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })

  }

  ngOnInit() {
  }

  onSubmit(formInfo){
    console.log(formInfo);
  }

  

}
