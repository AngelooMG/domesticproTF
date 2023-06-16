import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleadores } from 'src/app/model/empleadores.model';
import { EmpleadoresService } from 'src/app/services/empleadores.service';

@Component({
  selector: 'app-cat',
  templateUrl: './empleadores-list.component.html',
  styleUrls: ['./empleadores-list.component.css']
})

export class EmpleadoresListComponent implements OnInit {
  searchText:any;
  lista: Empleadores[]= []
  dataSource: MatTableDataSource <Empleadores> = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private as: EmpleadoresService) {}

  displayedColumns: string[] = ['id','name','age','district', 'actions']
  ngOnInit(): void {

    this.as.list().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
    })
    this.as.getList().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
    })
  }


}
