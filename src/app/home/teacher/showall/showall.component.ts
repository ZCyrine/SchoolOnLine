import {APP_ID, Component, OnInit} from '@angular/core';
import {PersonneService} from '../../../service/personne.service';
import {__importDefault} from 'tslib';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  title : 'teacher';
  ListeTeacher;
  Teacheredit : FormGroup
  submitted = false;
  _id;

  constructor(private personneService :PersonneService,private formBuilder: FormBuilder) { }
  ;
  ngOnInit() {
    this.allteacher();
    this.Teacheredit=this.formBuilder.group({
       nic: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      datebirth: ['', Validators.required],
      phonenumber: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      salary: ['', Validators.required],
      nbrehour: ['', Validators.required],
      group: ['', Validators.required],

    });



  }
  allteacher() {
    this.personneService.AllTeacher().subscribe(res=> {

        this.ListeTeacher = res;
        console.log(res);
      }
    )
  }
  deleteteacher(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'

    }).then((result) => {
      if (result.value) {
        this.personneService.DeleteTeacher(id).subscribe(res => {
          console.log(res);
          this.allteacher();
        })
      }
    })
  }
  get E() {

    return this.Teacheredit.controls;
  }
  updateteacher() {



    this.submitted = true ;

    if (this.Teacheredit.invalid){

      window.location.reload()

      console.log(this.Teacheredit.value)

      return ;

    }




    this.personneService.updateTeacher(this._id, this.Teacheredit.value).subscribe(res=>
    {
      this.allteacher();

    })
  }
  recuperer(_id,nic,name,lastname,email,datebirth,phonenumber,password,gender,salary,nbrehour,group){
    console.log('updateeeeeeeeeeeeee')
    this._id= _id;

    console.log(this._id)

    this.Teacheredit.get("nic").setValue(nic);
    this.Teacheredit.get("name").setValue(name);
    this.Teacheredit.get(lastname).setValue(lastname);
    this.Teacheredit.get(email).setValue(email);
    this.Teacheredit.get(datebirth).setValue(datebirth);
    this.Teacheredit.get(phonenumber).setValue(phonenumber);
    this.Teacheredit.get(password).setValue(password);
    this.Teacheredit.get(gender).setValue(gender);
    this.Teacheredit.get(salary).setValue(salary);
    this.Teacheredit.get(nbrehour).setValue(nbrehour);
    this.Teacheredit.get(group).setValue(group);

  }








}
