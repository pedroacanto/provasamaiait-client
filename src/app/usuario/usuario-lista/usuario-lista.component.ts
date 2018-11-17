import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ConfirmationService } from '../../../../node_modules/primeng/api';
import { ToastyService } from '../../../../node_modules/ng2-toasty';
import { ErrorHandleService } from '../../error-handle.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,              
              private confirmation: ConfirmationService,
              private toasty: ToastyService,
              private erroHandler: ErrorHandleService) { }
  usuarios=[]

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.listarUsuarios()
    .then(usuarios => this.usuarios = usuarios);
  }

  confirmarExclucao(usuario:any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(usuario);
      }
    });
  }

  excluir(usuario: any){
    this.usuarioService.excluir(usuario.id)
    .then(() => {
      this.listarUsuarios();
      this.toasty.success('Excluido com sucesso!');
    })
    .catch(erro =>  this.erroHandler.handle(erro));
  }

}
