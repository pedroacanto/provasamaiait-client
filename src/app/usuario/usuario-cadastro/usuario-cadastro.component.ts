import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';
import { ErrorHandleService } from '../../error-handle.service';
import { Usuario } from '../../model';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario = new Usuario();

  constructor(private usuarioService: UsuarioService,
              private toasty: ToastyService,
              private erroHandler: ErrorHandleService,
              private route: ActivatedRoute) { }  

  ngOnInit() {
    const idUsuario = this.route.snapshot.params['id'];
    if(idUsuario){
      this.carregarUsuario(idUsuario);
    }

  }

  get editando(){
    return Boolean(this.usuario.id);
  }

  carregarUsuario(idUsuario: number){
    this.usuarioService.buscarUsuarioPorId(idUsuario)
    .then(usuario => {      
      usuario.dataCadastro = moment(usuario.dataCadastro).format('DD/MM/YYYY');
      this.usuario = usuario;
    }).catch(erro => this.erroHandler.handle(erro));
  
  }

  salvar(form: FormControl){
    if(this.editando){
      this.atualizarLancamento(form);
    }else{
      this.adicionarLancamento(form);
    }
  }

  atualizarLancamento(form: FormControl){    

    this.usuarioService.atualizar(this.usuario)
    .then(usuario => {
      
      this.usuario = usuario;

      this.toasty.success('Usuário alterado com sucesso!');
    })
    .catch(erro => this.erroHandler.handle(erro));
  }

  adicionarLancamento(form: FormControl){
    this.usuarioService.adicionar(this.usuario)
    .then(() => {
      this.toasty.success('Usuário Cadastrado com sucesso!');

      form.reset();
      this.usuario = new Usuario();
    })
    .catch(erro => this.erroHandler.handle(erro));
  }

}
