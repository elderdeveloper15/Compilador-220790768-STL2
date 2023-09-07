import { Nodo } from "../Nodo.js";

export class R44 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.opSuma = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.opSuma = this.pila.shift();
    }
}