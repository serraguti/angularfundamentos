import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros-component',
  standalone: false,
  styleUrl: './sumar-numeros-component.css',
  templateUrl: './sumar-numeros-component.html',
})
export class SumarNumerosComponent {
  //•	2 ViewChild, suma, mostrarSuma()
  @ViewChild("cajanumero1") cajanumero1!: ElementRef;
  @ViewChild("cajanumero2") cajanumero2!: ElementRef;
  suma: number;

  mostrarSuma(): void {
    //que queremos hacer aqui?
    //quiero sumar cada numero que tengo en las cajas
    //recuperar cada numero de cada caja
    //como son numeros, tenemos que convertir
    let numero1 = parseInt(this.cajanumero1.nativeElement.value);
    let numero2 = parseInt(this.cajanumero2.nativeElement.value);
    this.suma = numero1 + numero2;
  }

  constructor(){
    this.suma = 0;
  }
}
