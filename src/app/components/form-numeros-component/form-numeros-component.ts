import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-numeros-component',
  standalone: false,
  styleUrl: './form-numeros-component.css',
  templateUrl: './form-numeros-component.html',
})
export class FormNumerosComponent {
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  arrayNumeros: number[];

  constructor(){
    this.arrayNumeros = [];
  }

  insertarNumero(): void {
    let numero = parseInt(this.cajanumero.nativeElement.value);
    this.arrayNumeros.push(numero);
  }
}
