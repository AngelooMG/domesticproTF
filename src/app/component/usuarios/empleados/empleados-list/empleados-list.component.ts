import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleados } from 'src/app/model/empleados.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatSlider } from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-cat',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {
  searchText: any;
  noResultsFound: boolean = false;
  selectedDistrict: string = '';
  lista: Empleados[] = [];
  empleadoData!: Empleados;
  dataSource = new MatTableDataSource<Empleados>();
  displayedColumns: string[] = ['id', 'name', 'district', 'profession', 'actions'];
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  selectedProfession: string = '';

  constructor(private as: EmpleadosService) {
    this.empleadoData = {} as Empleados;
      this.noResultsFound = this.dataSource.filteredData.length === 0;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllEmpleados();
  }

  getAllEmpleados() {
    this.as.getList().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  extractProfessions(data: Empleados[]): string[] {
    const professionsSet = new Set<string>();
    data.forEach(item => {
      if (item.profession) {
        professionsSet.add(item.profession.toLowerCase());
      }
    });
    return Array.from(professionsSet);
  }

  extractDistricts(data: Empleados[]): string[] {
    const districtSet = new Set<string>();
    data.forEach(item => {
      if (item.district) {
        districtSet.add(item.district.toLowerCase());
      }
    });
    return Array.from(districtSet);
  }


  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.name.toLowerCase().includes(filter);
    };
  }

  applyDistrict(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = (data: Empleados, filter: string) => {
      return data.name.toLowerCase().includes(filter) || data.district.toLowerCase().includes(filter);
    };
  }
  applyProfession(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = (data: Empleados, filter: string) => {
      return data.name.toLowerCase().includes(filter) || data.profession.toLowerCase().includes(filter);
    };
  }
  clearFilters() {
    this.dataSource.filter = '';
    this.selectedDistrict = '';
    this.selectedProfession = '';
    this.noResultsFound = false;
  }

  perro: any;
}

