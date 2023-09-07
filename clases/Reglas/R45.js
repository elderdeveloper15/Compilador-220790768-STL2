import { Nodo } from "../Nodo.js";

export class R45 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.opNot = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.opNot = this.pila.shift();
    }
}