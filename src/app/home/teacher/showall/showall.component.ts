import { Component, OnInit } from '@angular/core';
import {PersonneService} from '../../../service/personne.service';
import {__importDefault} from 'tslib';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})

export class ShowallComponent implements OnInit {
  title: 'teacher';
  ListeUser;
  _id;
  constructor(private teacherservice: PersonneService) { }

  ngOnInit() {
    this.allteacher();
  }
  allteacher() {
    this.teacherservice.getAll().subscribe(res => {
      console.log(res);
      this.ListeUser = res;
    }
    );
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
        this.teacherservice.getDelete(id).subscribe(res => {
          console.log(res);
          this.allteacher();
        })
      }
    })
  }
}
