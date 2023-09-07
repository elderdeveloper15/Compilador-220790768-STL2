import { Nodo } from "../Nodo.js";

export class R37 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.entero = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.entero = this.pila.shift();
    }
}