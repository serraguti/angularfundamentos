import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-saludo-component',
  standalone: false,
  styleUrl: './form-saludo-component.css',
  templateUrl: './form-saludo-component.html',
})
export class FormSaludoComponent {
  //la variable viewchild que se llamará igual que el input
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  mensaje: string;

  //en el constructor debemos iniciar nuestras variables
  constructor() {
    this.mensaje = "";
  }

  //necesitamos un método para cuando el usuario pulse
  //el boton
  mostrarSaludo(): void {
    //recuperamos el valor de la caja
    let nombre = this.cajanombre.nativeElement.value;
    this.mensaje = "Hoy es miercoles, " + nombre;
  }
}
