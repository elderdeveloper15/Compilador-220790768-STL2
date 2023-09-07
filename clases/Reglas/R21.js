import { Nodo } from "../Nodo.js";

export class R21 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.id = " ";
        this.igual = " ";
        this.puntoComa = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.puntoComa = this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.igual = this.pila.shift();
        this.pila.shift();
        this.id = this.pila.shift();
    }
}