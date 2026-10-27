import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventoscomponent.html',
    standalone: false
})

export class EventosComponent implements OnInit {
    //declaramos una variable para el mensaje
    mensaje: string;

    constructor() {
        //le damos un valor el mensaje
        this.mensaje = "Hoy es martes!!!";
        console.log("Soy el constructor")
    }

    //debemos crear un método para cambiar el mensaje
    //al pulsar un botón
    cambiarMensaje(): void {
        //cambiamos el mensaje por otro
        this.mensaje = "y mañana miércoles!!!!";
    }

    ngOnInit() { 
        console.log("Soy On Init")
    }

    ngDoCheck(): void {
        console.log("Soy Do Check")
    }
}