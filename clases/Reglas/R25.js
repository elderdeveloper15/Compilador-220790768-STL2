import { Nodo } from "../Nodo.js";

export class R25 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.puntoComa = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.puntoComa = this.pila.shift();
    }
}