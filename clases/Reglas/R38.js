import { Nodo } from "../Nodo.js";

export class R38 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.real = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.real = this.pila.shift();
    }
}