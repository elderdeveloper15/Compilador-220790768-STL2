import { Nodo } from "../Nodo.js";

export class R34 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.coma = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.coma = this.pila.shift();
    }
}