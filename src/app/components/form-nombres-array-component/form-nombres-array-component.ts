import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-nombres-array-component',
  standalone: false,
  styleUrl: './form-nombres-array-component.css',
  templateUrl: './form-nombres-array-component.html',
})
export class FormNombresArrayComponent {
  //•	1 ViewChild, Array string, insertarNombre()
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  arraynombres: string[]

  insertarNombre(): void {
    //recuperamos el nombre de la caja
    let nombre = this.cajanombre.nativeElement.value;
    //añadimos el nombre al array (push)
    this.arraynombres.push(nombre);
  }

  constructor(){
    this.arraynombres = [];
  }
}
