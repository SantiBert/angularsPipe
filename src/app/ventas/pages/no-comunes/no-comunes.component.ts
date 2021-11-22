import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {
  public name: string = 'Susana';
  public gender: string = 'femenino';
  public invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };

  public customer: string[] = ['Lauren', 'Lena', 'Lana', 'Remy', 'Adella'];
  public customerMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando',
  };
  public person = {
    name: 'Diamond',
    age: 55,
    addres: 'Miami, Florida',
  }

  public heroes = [
    {
      name: 'Mika',
      active: true,
    },
    {
      name: 'riyu',
      active: true
    },
    {
      name: 'reed',
      active: false
    }
  ]

  public miObserbable = interval(1000);

  public promiceValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  constructor(
    private PrimeNGConfig: PrimeNGConfig
  ) { }

  changeName() {
    this.name = 'Riley';
  }

  AddCustomer() {
    this.customer.push('Samantha');
  }

  ngOnInit(): void {
    this.PrimeNGConfig.ripple = true;
  }

}
