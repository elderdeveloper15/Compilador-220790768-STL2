import { Nodo } from "../Nodo.js";

export class R43 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.parentAbre = " ";
        this.parentCierra = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.parentCierra = this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.parentAbre = this.pila.shift();
    }
}