import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from './matchPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  register: FormGroup;
  ngOnInit() {
    this.register = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]],
      userName: ['', [Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$'), Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: matchPassword('password', 'confirmPassword')});

  }

  get r() {
    return this.register.controls;
  }

  registerUser() {
    console.log(this.register.value, 'register');
  }

}
