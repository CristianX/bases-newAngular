import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>la base es: <strong> {{ base(5) }} </strong></h3>


        <button (click)="acumular(numBase)"> +1 </button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-numBase)"> -1 </button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    numero: number = 10;
    numBase: number = 0;

      base(base: number) {
        this.numBase = base;
        return this.numBase;
      }

      acumular (valor: number){
        this.numero += valor;
      }
}