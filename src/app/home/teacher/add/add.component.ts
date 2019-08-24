import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PersonneService} from '../../../service/personne.service';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  Teacher;
  constructor(private formBuilder: FormBuilder , private personneServ: PersonneService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nic: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      datebirth: ['', Validators.required],
      phonenumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      salary: ['', Validators.required],
      gender: ['', Validators.required],
      nbrehour: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    this.personneServ.AddTeacher(this.registerForm.value).subscribe(res => {
      console.log(this.registerForm);
      console.log(res);
      this.Teacher = res;
      this.registerForm.reset();
    });
  }
}
