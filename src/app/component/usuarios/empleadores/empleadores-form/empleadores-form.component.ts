import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { Empleadores } from 'src/app/model/empleadores.model';
import { EmpleadoresService } from 'src/app/services/empleadores.service';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

interface Districto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-empleadores-form',
  templateUrl: './empleadores-form.component.html',
  styleUrls: ['./empleadores-form.component.css']
})
export class EmpleadoresFormComponent {
  form: FormGroup = new FormGroup({});
  user: Empleadores = new Empleadores();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  distritos: Districto[] = [
    {value: 'Lima', viewValue: 'Lima'},
    {value: 'Ancón', viewValue: 'Ancón'},
    {value: 'Ate', viewValue: 'Ate'},
    {value: 'Barranco', viewValue: 'Barranco'},
    {value: 'Breña', viewValue: 'Breña'},
    {value: 'Carabayllo', viewValue: 'Carabayllo'},
    {value: 'Chaclacayo', viewValue: 'Chaclacayo'},
    {value: 'Chorrillos', viewValue: 'Chorrillos'},
    {value: 'Cieneguilla', viewValue: 'Cieneguilla'},
    {value: 'Comas', viewValue: 'Comas'},
    {value: 'El Agustino', viewValue: 'El Agustino'},
    {value: 'Independencia', viewValue: 'Independencia'},
    {value: 'Jesús María', viewValue: 'Jesús María'},
    {value: 'La Molina', viewValue: 'La Molina'},
    {value: 'La Victoria', viewValue: 'La Victoria'},
    {value: 'Lince', viewValue: 'Lince'},
    {value: 'Los Olivos', viewValue: 'Los Olivos'},
    {value: 'Lurigancho', viewValue: 'Lurigancho'},
    {value: 'Lurín', viewValue: 'Lurín'},
    {value: 'Magdalena del Mar', viewValue: 'Magdalena del Mar'},
    {value: 'Pueblo Libre', viewValue: 'Pueblo Libre'},
    {value: 'Miraflores', viewValue: 'Miraflores'},
    {value: 'Pachacámac', viewValue: 'Pachacámac'},
    {value: 'Pucusana', viewValue: 'Pucusana'},
    {value: 'Puente Piedra', viewValue: 'Puente Piedra'},
    {value: 'Punta Hermosa', viewValue: 'Punta Hermosa'},
    {value: 'Punta Negra', viewValue: 'Punta Negra'},
    {value: 'Rímac', viewValue: 'Rímac'},
    {value: 'San Bartolo', viewValue: 'San Bartolo'},
    {value: 'San Borja', viewValue: 'San Borja'},
    {value: 'San Isidro', viewValue: 'San Isidro'},
    {value: 'San Juan de Lurigancho', viewValue: 'San Juan de Lurigancho'},
    {value: 'San Juan de Miraflores', viewValue: 'San Juan de Miraflores'},
    {value: 'San Luis', viewValue: 'San Luis'},
    {value: 'San Martín de Porres', viewValue: 'San Martín de Porres'},
    {value: 'San Miguel', viewValue: 'San Miguel'},
    {value: 'Santa Anita', viewValue: 'Santa Anita'},
    {value: 'Santa María del Mar', viewValue: 'Santa María del Mar'},
    {value: 'Santa Rosa', viewValue: 'Santa Rosa'},
    {value: 'Santiago de Surco', viewValue: 'Santiago de Surco'},
    {value: 'Surquillo', viewValue: 'Surquillo'},
    {value: 'Villa El Salvador', viewValue: 'Villa El Salvador'},
    {value: 'Villa María del Triunfo', viewValue: 'Villa María del Triunfo'}
  ];


  constructor(private as: EmpleadoresService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private snackBar: MatSnackBar){

  }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })

  this.form = new FormGroup({
    id:new FormControl(),
    name: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    district: new FormControl(),
    dni: new FormControl()
  });
  }

  aceptar(): void{
    this.user.id=this.form.value['id'];
    this.user.name=this.form.value['name'];
    this.user.dni=this.form.value['dni'];
    this.user.email=this.form.value['email'];
    this.user.age=this.form.value['age'];
    this.user.district=this.form.value['district'];

    const name = this.form.value['name'];
    const dni = this.form.value['dni'];
    const email = this.form.value['email'];
    const age = this.form.value['age'];
    const district = this.form.value['district'];

    if (
      name && name.length <= 20 &&
      dni && dni.length === 8 &&
      email && email.length <= 40 &&
      age && age.toString().length <= 3 &&
      district && district.length <= 40
    ) {
      if (this.edicion) {
        this.as.update(this.user).subscribe((data) => {
          this.as.list().subscribe((data) => {
            this.as.setList(data);
          });
        });
      } else {
        this.as.insert(this.user).subscribe((data) => {
          this.as.list().subscribe((data) => {
            this.as.setList(data);
          });
        });
      }
      this.router.navigate(['empleadores']);
    } else {
      let errorMessage = 'Completa los siguientes campos correctamente: ';

      if (!name || name.length > 50) {
        errorMessage += 'Nombre (máximo 50 caracteres), ';
      }
      if (!dni || dni.length !== 8) {
        errorMessage += 'DNI (exactamente 8 caracteres), ';
      } else if (!/^\d+$/.test(dni)) {
        errorMessage += 'El DNI solo debe contener números, ';
      }
      if (!email || email.length > 60) {
        errorMessage += 'Email (max 60 caracteres), ';
      } else if (!/@gmail.com/.test(email) &&
                 !/@outlook.com/.test(email) &&
                 !/@hotmail.com/.test(email)) {
        errorMessage += 'Email no válido, ';
      }
      if (!age || age.toString().length > 2) {
        errorMessage += 'Edad (max 2 dígitos), ';
      } else if(age < 18 || age > 60){
          errorMessage += 'Edad Invalida, ';
      }
      if (!district) {
        errorMessage += 'Distrito';
      }
      errorMessage = errorMessage.slice(0, -2);

      this.snackBar.open(errorMessage, 'Cerrar', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
      });
    }
  }

  init() {
    if (this.edicion) {
      this.as.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name),
          email: new FormControl(data.email),
          age: new FormControl(data.age),
          district: new FormControl(data.district),
          dni: new FormControl(data.dni),
        })
      })
    }
  }

}
