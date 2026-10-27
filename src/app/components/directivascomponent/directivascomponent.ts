import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directivas',
    templateUrl: './directivascomponent.html',
    standalone: false
})

export class DirectivasComponent implements OnInit {
    //declaramos un array de deportes (string)
    deportes: string[]

    constructor() { 
        //asignamos valores a cada deporte del array.
        this.deportes = ["Petanca", "Curling", "Dardos", "Rana"]
    }

    ngOnInit() { }
}