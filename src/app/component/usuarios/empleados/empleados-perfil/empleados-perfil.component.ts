import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { Empleados } from 'src/app/model/empleados.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-empleados-perfil',
  templateUrl: './empleados-perfil.component.html',
  styleUrls: ['./empleados-perfil.component.css']
})
export class EmpleadosPerfilComponent implements OnInit{
  form!: FormGroup;
  user: Empleados;
  id: any = 0;
  edicion: boolean = false;
  constructor(
    private fb: FormBuilder,
    private as: EmpleadosService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) {
    this.user = {
      id: 0,
      name: "",
      dni: 0,
      email: "",
      age: 0,
      district: "",
      profession: "",
      descripcion: "",
  //picture: ""
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
