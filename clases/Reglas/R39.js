import { Nodo } from "../Nodo.js";

export class R39 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.cadena = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.cadena = this.pila.shift();
    }
}