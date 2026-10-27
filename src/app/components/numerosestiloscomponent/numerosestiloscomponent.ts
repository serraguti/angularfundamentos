import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numeros',
    templateUrl: './numerosestiloscomponent.html',
    standalone: false,
    styleUrl: "./numerosestiloscomponent.css"
})

export class NumerosEstilosComponent implements OnInit {
    numeros: number[]

    constructor() {
        this.numeros = [5,77,11,22,44,6687]
    }

    generarNumero(): void {
        //declaramos un numero con valor aleatorio
        let random = Math.floor(Math.random() * 100) + 1;
        this.numeros.push(random);
    }

    ngOnInit() { }
}