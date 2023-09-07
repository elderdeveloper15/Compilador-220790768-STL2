import { Nodo } from "../Nodo.js";

export class R11 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.id = " ";
        this.tipo = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.id = this.pila.shift();
        this.pila.shift();
        this.tipo = this.pila.shift();
    }
}