import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { Routes, RouterModule } from '@angular/router'
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';

const routes: Routes = [
  { path: '', component: UsuarioListaComponent},
  { path: 'usuarios/novo', component: UsuarioCadastroComponent },
  { path: 'usuarios/:id', component: UsuarioCadastroComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,UsuarioModule, BrowserAnimationsModule, ConfirmDialogModule,
    RouterModule.forRoot(routes),
    ToastyModule.forRoot()
  ],
  exports:[ToastyModule],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
