import { Component } from '@angular/core';
import { ToastyConfig } from '../../node_modules/ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'provasamaiait';
  
  constructor(private toastyConfig: ToastyConfig){
    this.toastyConfig.theme='bootstrap'
  }

}
