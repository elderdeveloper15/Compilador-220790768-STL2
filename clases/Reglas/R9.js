import { Nodo } from "../Nodo.js";

export class R9 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.id = 0;
        this.tipo = " ";
        this.parentAbre = " ";
        this.parentCierra = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.parentCierra = this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.parentAbre = this.pila.shift();
        this.pila.shift();
        this.id = this.pila.shift();
        this.pila.shift();
        this.tipo = this.pila.shift();
    }
}