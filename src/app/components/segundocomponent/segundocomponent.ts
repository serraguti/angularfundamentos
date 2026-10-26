import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-segundo',
    templateUrl: './segundocomponent.html',
    standalone: false
})

export class SegundoComponent implements OnInit {
    //DECLARAMOS VARIABLES
    nombre: string;
    diasemana: string;
    numero: number;

    constructor() { 
        //CON this ACCEDEMOS A LAS VARIABLES.
        this.nombre = "Alumno";
        this.diasemana = "Hoy es lunes";
        this.numero = 26;
    }

    ngOnInit() { }
}