import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  constructor(private http: HttpClient) { }

  urlUsuario = 'http://localhost:8080/usuario';

  listarUsuarios(): Promise<any>{
    return this.http.get(this.urlUsuario).toPromise().then(response => response);
  }

  excluir(id: number): Promise<void>{
    return this.http.delete(`${this.urlUsuario}/${id}`)
    .toPromise()
    .then(()=>null);
  }

  buscarUsuarioPorId(idUsuario: number): Promise<any>{
    return this.http.get(`${this.urlUsuario}/${idUsuario}`)
    .toPromise()
    .then(response => response);
  }

  adicionar(usuario: Usuario): Promise<any>{
    const headers = new HttpHeaders({"Content-Type": "application/json"});

    return this.http.post(this.urlUsuario, JSON.stringify(usuario),{headers: headers})
    .toPromise()
    .then(response => response);
  }

  atualizar(usuario: Usuario): Promise<any>{
    const headers = new HttpHeaders({"Content-Type": "application/json"});

    return this.http.put(`${this.urlUsuario}/${usuario.id}`, JSON.stringify(usuario), {headers: headers})
    .toPromise()
    .then(response => response);
  }

}