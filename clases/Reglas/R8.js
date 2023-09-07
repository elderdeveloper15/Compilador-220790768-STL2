import { Nodo } from "../Nodo.js";

export class R8 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.id = " ";
        this.coma = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.id = this.pila.shift();
        this.pila.shift();
        this.coma = this.pila.shift();
    }
}