import { Nodo } from "../Nodo.js";

export class R28 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.abreLlave = " ";
        this.cierraLlave = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.cierraLlave = this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.abreLlave = this.pila.shift();
    }
}