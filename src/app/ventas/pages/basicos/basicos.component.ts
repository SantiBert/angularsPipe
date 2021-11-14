import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  public nombreLower: string = 'lauren';
  public nombreUpper: string = 'LAUREN';
  public nombreCompleto: string = 'lAuReN pHiLips';
}
