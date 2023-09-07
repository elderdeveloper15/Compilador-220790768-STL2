import { Nodo } from "../Nodo.js";

export class R36 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.id = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.id = this.pila.shift();
    }
}