import { Nodo } from "../Nodo.js";

export class R50 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.opAnd = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.opAnd = this.pila.shift();
    }
}