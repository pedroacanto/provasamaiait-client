import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import { RouterModule } from '@angular/router'
import {PanelModule} from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule, TableModule,FormsModule,InputTextModule,ButtonModule, CalendarModule, CheckboxModule, PanelModule,
    RouterModule
  ],
  declarations: [UsuarioCadastroComponent, UsuarioListaComponent],
  exports: [UsuarioListaComponent, UsuarioCadastroComponent]
})
export class UsuarioModule { }
