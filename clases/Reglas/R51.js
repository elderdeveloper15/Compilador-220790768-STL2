import { Nodo } from "../Nodo.js";

export class R51 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.opOr = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.opOr = this.pila.shift();
    }
}