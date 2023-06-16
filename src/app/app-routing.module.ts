import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/landing/home/home.component';
import { EmpleadosFormComponent } from './component/usuarios/empleados/empleados-form/empleados-form.component';
import { EmpleadosListComponent } from './component/usuarios/empleados/empleados-list/empleados-list.component';
import { EmpleadoresListComponent } from './component/usuarios/empleadores/empleadores-list/empleadores-list.component';
import { EmpleadoresFormComponent } from './component/usuarios/empleadores/empleadores-form/empleadores-form.component';
import { ComponentComponent } from './component/component.component';
import { EmpleadosPerfilComponent } from './component/usuarios/empleados/empleados-perfil/empleados-perfil.component';
import { EmpleadoresPerfilComponent } from './component/usuarios/empleadores/empleadores-perfil/empleadores-perfil.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},


  {path:'empleados', component: EmpleadosListComponent},
  {path:'empleados/edicion/:id', component: EmpleadosPerfilComponent },
  {path:'registro-empleados', component: EmpleadosFormComponent},
  {path:'registro-empleadores', component: EmpleadoresFormComponent},
  {path:'empleadores', component: EmpleadoresListComponent},
  {path:'empleadores/edicion/:id', component: EmpleadoresPerfilComponent },



/*
  {path:'registro-empleados', component: EmpleadosFormComponent},
  {path:'registro-empleadores', component: EmpleadoresFormComponent},
  {path:'empleados', component: EmpleadosListComponent, children: [
    { path: 'edicion/:id', component: EmpleadosFormComponent }
  ]},
  {path:'empleadores', component: EmpleadoresListComponent},
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




