import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empleadores } from 'src/app/model/empleadores.model';
import { Subject, Observable } from 'rxjs';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})

export class EmpleadoresService {
  private url = `${base_url}/empleadores`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Empleadores[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Empleadores[]>(this.url);
  }

  insert(user:Empleadores){
    return this.http.post(this.url, user);
  }

  setList(listaNueva: Empleadores[]){
    this.listaCambio.next(listaNueva)
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Empleadores>(`${this.url}/${id}`);
  }
  update(aut: Empleadores) {
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
