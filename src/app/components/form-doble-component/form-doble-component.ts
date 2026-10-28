import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-doble-component',
  standalone: false,
  styleUrl: './form-doble-component.css',
  templateUrl: './form-doble-component.html',
})
export class FormDobleComponent {
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  doble: number;

  constructor() {
    this.doble = 0;
  }

  //metodo para ver el doble
  mostrarDoble(): void {
    //en las cajas siempre vienen textos/string.
    //si queremos un numero, necesitamos parseInt
    let numero = parseInt(this.cajanumero.nativeElement.value);
    this.doble = numero * 2;
  }
}
