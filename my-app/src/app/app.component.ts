import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){};

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.myForm;
  }
  checkData() {
    console.log(this.myForm.value,'hrekjeh')
  }
}
