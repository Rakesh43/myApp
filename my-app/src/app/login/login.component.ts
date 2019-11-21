import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){};

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.myForm.controls;
  }

  checkData() {
    console.log(this.myForm.value,'hrekjeh')
  }

}

