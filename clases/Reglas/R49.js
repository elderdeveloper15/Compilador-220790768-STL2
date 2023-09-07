import { Nodo } from "../Nodo.js";

export class R49 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.opIgualdad = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.opIgualdad = this.pila.shift();
    }
}