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
  ListeUser;
  Teacheredit : FormGroup
  submitted = false;
  _id;

  constructor(private personneService :PersonneService,private formBuilder: FormBuilder) { }
  ;
  ngOnInit() {
    this.allteacher();
    this.Teacheredit=this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
      salaire: ['', Validators.required],
      nbre_heure: ['', Validators.required],
    });



  }
  allteacher() {
    this.personneService.AllTeacher().subscribe(res=> {

        this.ListeUser = res;
        console.log(res);
      }
    )
  }
  remove(id) {
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
  edit() {



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
  recuperer(_id, nom, prenom, email, tel, salaire, nbre_heure){
    console.log('updateeeeeeeeeeeeee')
    this._id= _id;

    console.log(this._id)

    this.Teacheredit.get("nom").setValue(nom);
    this.Teacheredit.get("prenom").setValue(prenom);
    this.Teacheredit.get("email").setValue(email);
    this.Teacheredit.get("tel").setValue(tel);
    this.Teacheredit.get("salaire").setValue(salaire);
    this.Teacheredit.get("nbre_heure").setValue(nbre_heure);

  }








}
