import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(private toasty: ToastyService) { }

  handle(erroHandle: any){
    let msg: string;
    
    if(typeof msg === 'string'){
      msg = erroHandle;
    }else{
      msg = 'Erro ao processar o serviço remoto. Tente Novamente.';
    }
    this.toasty.error(msg);
  }

}
