import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empleados } from 'src/app/model/empleados.model';
import { Subject, Observable } from 'rxjs';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {
  private url = `${base_url}/empleados`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Empleados[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Empleados[]>(this.url);
  }

  insert(user:Empleados){
    return this.http.post(this.url, user);
  }

  setList(listaNueva: Empleados[]){
    this.listaCambio.next(listaNueva)
  }
  getList(){
    // return this.listaCambio.asObservable();
    return this.http.get<Empleados>(`${this.url}`);
  }
  listId(id: number) {
    return this.http.get<Empleados>(`${this.url}/${id}`);
  }

  update(aut: Empleados) {
    return this.http.put(this.url +"/"+aut.id,aut);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
