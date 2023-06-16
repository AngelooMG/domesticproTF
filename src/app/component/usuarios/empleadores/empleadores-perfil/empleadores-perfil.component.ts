import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { Empleadores } from 'src/app/model/empleadores.model';
import { EmpleadoresService } from 'src/app/services/empleadores.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-empleadores-perfil',
  templateUrl: './empleadores-perfil.component.html',
  styleUrls: ['./empleadores-perfil.component.css']
})
export class EmpleadoresPerfilComponent implements OnInit{
  form!: FormGroup;
  user: Empleadores;
  id: any = 0;
  edicion: boolean = false;
  constructor(
    private fb: FormBuilder,
    private as: EmpleadoresService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) {
    this.user = {
      id: 0,
      name: "",
      dni: 0,
      email: "",
      age: 0,
      district: ""
    };
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.as.listId(this.id).subscribe((data) => {
      this.user = data;
      console.log(data);
    });
  }
}
