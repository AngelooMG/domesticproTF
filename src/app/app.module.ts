import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/landing/header/header.component';
import { HomeComponent } from './component/landing/home/home.component';
import { FooterComponent } from './component/landing/footer/footer.component';
import { ComponentComponent } from './component/component.component';
import { EmpleadosFormComponent } from './component/usuarios/empleados/empleados-form/empleados-form.component';
import { MatTabsModule } from '@angular/material/tabs'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatDialogModule } from '@angular/material/dialog';
import { EmpleadosListComponent } from './component/usuarios/empleados/empleados-list/empleados-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoresFormComponent } from './component/usuarios/empleadores/empleadores-form/empleadores-form.component';
import { EmpleadoresListComponent } from './component/usuarios/empleadores/empleadores-list/empleadores-list.component';
import { HeaderdialogComponent } from './component/landing/header/headerdialog/headerdialog.component';
import { EmpleadosPerfilComponent } from './component/usuarios/empleados/empleados-perfil/empleados-perfil.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmpleadoresPerfilComponent } from './component/usuarios/empleadores/empleadores-perfil/empleadores-perfil.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComponentComponent,
    EmpleadosFormComponent,
    FooterComponent,
    EmpleadosListComponent,
    EmpleadoresFormComponent,
    EmpleadoresListComponent,
    HeaderdialogComponent,
    EmpleadosPerfilComponent,
    EmpleadoresPerfilComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
