import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent {
  public ventasNetas: number = 784621.3545;
  public porcentajes: number = 0.48;

  constructor() { }

}
