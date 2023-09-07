import { Nodo } from "../Nodo.js";

export class R6 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.id = " ";
        this.tipo = " ";
        this.puntoComa = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.puntoComa = this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.id = this.pila.shift();
        this.pila.shift();
        this.tipo = this.pila.shift();
    }

}