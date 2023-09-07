import { Nodo } from "../Nodo.js";

export class R24 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.regresa = " ";
        this.puntoComa = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.puntoComa = this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.regresa = this.pila.shift();
    }
}