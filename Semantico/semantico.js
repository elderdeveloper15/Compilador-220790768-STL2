//DefVar r6
//ListaVar r8

//DefFunc r9
//Params r11
//ListaParam r13

import { DefVar } from "../clases/DefVar.js";
import { DefFunc } from "../clases/DefFunc.js";
import { R1 } from "../clases/Reglas/R1.js";
import { R2 } from "../clases/Reglas/R2.js";
import { R3 } from "../clases/Reglas/R3.js";
import { R4 } from "../clases/Reglas/R4.js";
import { R5 } from "../clases/Reglas/R5.js";
import { R6 } from "../clases/Reglas/R6.js";
import { R7 } from "../clases/Reglas/R7.js";
import { R8 } from "../clases/Reglas/R8.js";
import { R9 } from "../clases/Reglas/R9.js";
import { R10 } from "../clases/Reglas/R10.js";
import { R11 } from "../clases/Reglas/R11.js";
import { R12 } from "../clases/Reglas/R12.js";
import { R13 } from "../clases/Reglas/R13.js";
import { R14 } from "../clases/Reglas/R14.js";
import { R15 } from "../clases/Reglas/R15.js";
import { R16 } from "../clases/Reglas/R16.js";
import { R17 } from "../clases/Reglas/R17.js";
import { R18 } from "../clases/Reglas/R18.js";
import { R19 } from "../clases/Reglas/R19.js";
import { R20 } from "../clases/Reglas/R20.js";
import { R21 } from "../clases/Reglas/R21.js";
import { R22 } from "../clases/Reglas/R22.js";
import { R23 } from "../clases/Reglas/R23.js";
import { R24 } from "../clases/Reglas/R24.js";
import { R25 } from "../clases/Reglas/R25.js";
import { R26 } from "../clases/Reglas/R26.js";
import { R27 } from "../clases/Reglas/R27.js";
import { R28 } from "../clases/Reglas/R28.js";
import { R29 } from "../clases/Reglas/R29.js";
import { R30 } from "../clases/Reglas/R30.js";
import { R31 } from "../clases/Reglas/R31.js";
import { R32 } from "../clases/Reglas/R32.js";
import { R33 } from "../clases/Reglas/R33.js";
import { R34 } from "../clases/Reglas/R34.js";
import { R35 } from "../clases/Reglas/R35.js";
import { R36 } from "../clases/Reglas/R36.js";
import { R37 } from "../clases/Reglas/R37.js";
import { R38 } from "../clases/Reglas/R38.js";
import { R39 } from "../clases/Reglas/R39.js";
import { R40 } from "../clases/Reglas/R40.js";
import { R41 } from "../clases/Reglas/R41.js";
import { R42 } from "../clases/Reglas/R42.js";
import { R43 } from "../clases/Reglas/R43.js";
import { R44 } from "../clases/Reglas/R44.js";
import { R45 } from "../clases/Reglas/R45.js";
import { R46 } from "../clases/Reglas/R46.js";
import { R47 } from "../clases/Reglas/R47.js";
import { R48 } from "../clases/Reglas/R48.js";
import { R49 } from "../clases/Reglas/R49.js";
import { R50 } from "../clases/Reglas/R50.js";
import { R51 } from "../clases/Reglas/R51.js";
import { R52 } from "../clases/Reglas/R52.js";
import { Terminal } from "../clases/Terminal.js";

let num = 1;
let nRegla;
let newDefvar;
let newDefFunc;
let newDefParam;
let tablaDefsVariables = [];
let tablaDefsFunciones = [];
let tablaDefsParametros = [];

export class Semantico{

    constructor() {
        this.arbol = " ";  
        this.ambitoActual = "#"
        this.valido = true;  
        this.codigoError = 0;  
    }

    analizaSemantico(){
        this.buscaEnArbol(this.arbol.hijos);
        this.buscaSentencias(this.arbol.hijos);
        // console.log("Variables");
        // console.log(tablaDefsVariables);
        // console.log("Funciones");
        // console.log(tablaDefsFunciones);
        // console.log("Parametros");
        // console.log(tablaDefsParametros);
        
    }

    muestraArbol(){
        console.log("Arbol Semantico");
        console.log(this.arbol.dato);
        this.printHijos(this.arbol.hijos, num);
    }

    printHijos(hijos, nEspacios){
        let cad;
        num++;
        if(typeof hijos != "undefined"){
            for(let i = 0; i < hijos.length; i++){
                cad = "";
                for(let j = 0; j < nEspacios; j++){
                    cad += " ";
                }
                cad += hijos[i].dato;
                console.log(cad);
                this.printHijos(hijos[i].hijos, num);
            }
        }
    }

    buscaEnArbol(hijos){
        if(typeof hijos != "undefined"){
            for(let i = 0; i < hijos.length; i++){
                if(hijos[i].dato == "DefFunc"){
                    newDefFunc = new DefFunc(hijos[i].hijos[0], hijos[i].hijos[1]);

                    let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == hijos[i].hijos[1].dato);
                    if(funcion){
                        this.valido = false;
                        this.codigoError = 1; //la funcion ya existe
                        this.muestraError(hijos[i].hijos[1].dato);
                    }
                    tablaDefsFunciones.push(newDefFunc);
                    this.ambitoActual = hijos[i].hijos[1];
                }
                else if(hijos[i].dato == "Params"){
                    if(hijos[i].hijos.length > 1){
                        if(hijos[i].hijos[0].dato != ''){
                            newDefParam = new DefVar(hijos[i].hijos[0], hijos[i].hijos[1], this.ambitoActual);
                            //
                            let encontrado = false;
                            tablaDefsParametros.forEach(element => {
                                if(element.ambito.dato == this.ambitoActual.dato){
                                    if(element.id.dato == hijos[i].hijos[1].dato)
                                        encontrado = true;
                                }
                            });
                            if(encontrado){
                                this.valido = false;
                                this.codigoError = 2; //el parametro ya esta definido
                                this.muestraError(hijos[i].hijos[1].dato);
                            }
                            let vari = tablaDefsVariables.find(variable => 
                                variable.id.dato == hijos[i].hijos[1].dato && variable.ambito.dato == "*");
                            if(vari){
                                this.valido = false;
                                this.codigoError = 3; //la variable ya esta definida globalmente
                                this.muestraError(hijos[i].hijos[1].dato);
                            }
 
                            tablaDefsParametros.push(newDefParam);
                            this.checkListaParam(hijos[i].hijos[2]);
                        }        
                    }
                }
                else if(hijos[i].dato == "DefVar"){
                    newDefvar = new DefVar(hijos[i].hijos[0], hijos[i].hijos[1], this.ambitoActual);
                    //
                    let encontrado = tablaDefsVariables.find(variable => 
                        variable.id.dato == hijos[i].hijos[1].dato && (variable.ambito.dato == this.ambitoActual.dato || variable.ambito.dato == "*"));
                    if(encontrado)
                    {
                        this.valido = false;
                        this.codigoError = 4; //la variable ya esta definida
                        this.muestraError(hijos[i].hijos[1].dato);
                    } 
                    if(this.ambitoActual.dato != "*") {
                        let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == this.ambitoActual.dato);
                        let param = false;
                        tablaDefsParametros.forEach(element => {
                            if(element.ambito.dato == this.ambitoActual.dato){
                                if(element.id.dato == hijos[i].hijos[1].dato)
                                    param = true;
                                }
                            });
                         if(param){
                            this.valido = false;
                            this.codigoError = 4; //la variable ya esta definida
                            this.muestraError(hijos[i].hijos[1].dato);
                         }
                    }            
                    //
                    tablaDefsVariables.push(newDefvar);
                    this.checkListaVar(hijos[i].hijos[2], hijos[i].hijos[0]);
                }

                this.buscaEnArbol(hijos[i].hijos);
            }
        }
    }

    buscaSentencias(hijos){
        if(typeof hijos != "undefined"){
            for(let i = 0; i < hijos.length; i++){
                if(hijos[i].dato == "DefFunc"){
                    this.ambitoActual = hijos[i].hijos[1];
                }
                else if(hijos[i].dato == "Sentencia"){
                    //console.log("Sentencia");
                    //console.log(hijos[i]);
                    this.analizaSentencia(hijos[i]);
                }

                this.buscaSentencias(hijos[i].hijos);
            }
        }
    }

    checkListaVar(listaVar, tipo){
        if(listaVar.hijos.length > 0){
            newDefvar = new DefVar(tipo, listaVar.hijos[1], this.ambitoActual);
            
            let encontrado = tablaDefsVariables.find(variable => 
                variable.id.dato == listaVar.hijos[1].dato && (variable.ambito.dato == this.ambitoActual.dato || variable.ambito.dato == "*"));
            if(encontrado){
                this.valido = false;
                this.codigoError = 4; //la variable ya esta definida
                this.muestraError(listaVar.hijos[1].dato);
            }
            if(this.ambitoActual.dato != "*") {
                let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == this.ambitoActual.dato);
                let param = false;
                tablaDefsParametros.forEach(element => {
                    if(element.ambito.dato == this.ambitoActual.dato){
                        if(element.id.dato == listaVar.hijos[1].dato)
                            param = true;
                        }
                });
                if(param){
                    this.valido = false;
                    this.codigoError = 4; //la variable ya esta definida
                    this.muestraError(listaVar.hijos[1].dato);
                }
            }
            //
            tablaDefsVariables.push(newDefvar);
            this.checkListaVar(listaVar.hijos[2], tipo);
        }
        else{
            return;
        }
    }

    checkListaParam(listaParam){
        if(listaParam.hijos.length > 0){
            newDefvar = new DefVar(listaParam.hijos[1], listaParam.hijos[2], this.ambitoActual);
            //
            let encontrado = false;

            tablaDefsParametros.forEach(element => {
                if(element.ambito.dato == this.ambitoActual.dato){
                    if(element.id.dato == listaParam.hijos[2].dato)
                        encontrado = true;
                    }
            });
            if(encontrado){
                this.valido = false;
                this.codigoError = 2; //el parametro ya esta definido
                this.muestraError(listaParam.hijos[2].dato);
            }
            let vari = tablaDefsVariables.find(variable => 
                variable.id.dato == listaParam.hijos[2].dato && variable.ambito.dato == "*");
            if(vari){
                this.valido = false;
                this.codigoError = 3; //la variable ya esta definida globalmente
                this.muestraError(hijos[i].hijos[1].dato);
            }
            //
            tablaDefsParametros.push(newDefvar);
            this.checkListaParam(listaParam.hijos[3]);
        }
        else{
            return;
        }
    }

    analizaSentencia(hijo){
        //console.log("///////////////////"); 
        if(hijo instanceof R21) {
            nRegla = "R21";
            let id = hijo.hijos[0].dato;    
            let encontrado = tablaDefsVariables.find(variable => 
                variable.id.dato == id && (variable.ambito.dato == this.ambitoActual.dato || variable.ambito.dato == "*"));
            if(encontrado) {
                let expresion = this.analizaExpresion(hijo.hijos[2]);
                if(encontrado.tipo.dato == expresion)
                    return expresion;
                else {
                    this.valido = false;
                    //this.codigoError = 5; //tipos incompatibles
                    //this.muestraError(nRegla + " '" + encontrado.tipo.dato + "' y '" + expresion + "'");
                    return "undefined";
                }
            } else {
                let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == this.ambitoActual);
                if(funcion) {
                    tablaDefsParametros.forEach(element => {
                        if(element.ambito.dato == this.ambitoActual.dato){
                            if(element.id.dato == id){
                                let expresion = this.analizaExpresion(hijo.hijos[2]);
                                if(element.tipo.dato == expresion)
                                    return expresion;
                                else {
                                    this.valido = false;
                                    this.codigoError = 5; //tipos incompatibles
                                    this.muestraError(nRegla + " '" + encontrado.tipo.dato + "' y '" + expresion + "'");    
                                    return "undefined";
                                }
                            }
                        }
                    });
                }
                this.valido = false;
                this.codigoError = 6; //variable no definida
                this.muestraError(id);
                return "undefined";
            }
            
        } else if(hijo instanceof R22 || hijo instanceof R23) {
            return this.analizaExpresion(hijo.hijos[2]);
        }
            
    
        else if(hijo instanceof R24) {
            nRegla = "R24";
            if(hijo.hijos[1].hijos.length == 0) {
                let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == this.ambitoActual.dato);
                if(funcion.tipo.dato == "void")
                    return "void";
                else {
                    this.valido = false;
                    this.codigoError = 7; //se esperaba retornar otro tipo de dato
                    this.muestraError(funcion);
                    return "undefined";
                }
            } else {
                let tipo = this.analizaExpresion(hijo.hijos[1].hijos[0]);
                let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == this.ambitoActual.dato);
                if(funcion.tipo.dato == tipo)
                    return tipo;
                else {
                    this.valido = false;
                    this.codigoError = 7; //se esperaba retornar otro tipo de dato
                    this.muestraError(funcion);
                    return "undefined";
                }
            }
        } else if(hijo instanceof R25) {
            return this.analizaLlamadaFunc(hijo.hijos[0]);
        }
    }

    analizaLlamadaFunc(hijo){
        let id = hijo.hijos[0].dato;

        let listaParametros = [];
        let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == id);
 
        if(funcion) {
            let listaArgumentos = this.analizaArgs(hijo.hijos[2]);
            tablaDefsParametros.forEach(element => {
                if(element.ambito.dato == funcion.id.dato){
                    listaParametros.push(element);
                }
            });
            //console.log(listaParametros);
            //console.log(listaArgumentos);

            if(listaArgumentos.length == listaParametros.length) { 
                for (let i = 0; i < listaArgumentos.length; i++) {
                    if(listaParametros[i].tipo.dato != listaArgumentos[i]) {
                        this.valido = false;
                        this.codigoError = 5; //tipos de datos no compatibles
                        this.muestraError("En la funcion '" + id + "': " + "'" + listaParametros[i].tipo.dato + "' y '" + listaArgumentos[i] + "'");
                        return "undefined";
                    }   
                }
                return funcion.tipo.dato;
            } else {
                this.valido = false;
                this.codigoError = 9; //El numero de argumentos y parametros no coincide
                this.muestraError(id);
                return "undefined";
            }

        } else {
            this.valido = false;
            this.codigoError = 8; //funcion no definida
            this.muestraError(id);
            return "undefined";
        } 
    }

    analizaArgs(args){
        let listaArgumentos = [];
        //console.log(">> " + args); 
        if(typeof args != "undefined"){
            if(args.hijos.length != 0) {
                let i = 0;

                if(args.hijos[0] instanceof Terminal)
                    i++;

                let expresion = this.analizaExpresion(args.hijos[i]);
                //console.log(expresion)
                listaArgumentos.unshift(expresion);
                listaArgumentos = [...listaArgumentos, ...this.analizaArgs(args.hijos[i + 1])]
            }
        }
        return listaArgumentos;
    }

    analizaExpresion(hijo) {
        if(hijo instanceof R43) 
            return this.analizaExpresion(hijo.hijos[1]);

        else if(hijo instanceof R44) 
            return this.analizaExpresion(hijo.hijos[1]);
        
        else if(hijo instanceof R45)
            return this.analizaExpresion(hijo.hijos[1]);
            
        else if(hijo instanceof R46 || hijo instanceof R47 || hijo instanceof R48
            || hijo instanceof R49 || hijo instanceof R50 || hijo instanceof R51) {
            let tipo1 = this.analizaExpresion(hijo.hijos[2]);
            let tipo2 = this.analizaExpresion(hijo.hijos[0]);

            if(tipo1 == tipo2)
                return tipo1;
            else {
                this.valido = false;
                this.codigoError = 5; //tipos incompatibles
                this.muestraError("'" + tipo1 + "' y '" + tipo2 + "'");
                return "undefined";
            }
        } else if(hijo instanceof R52)
            return this.analizaTermino(hijo.hijos[0]);
    }

    analizaTermino(hijo) {
        if(hijo instanceof R35) {
            return this.analizaLlamadaFunc(hijo.hijos[0]);
        }

        else if(hijo instanceof R36) {
            let id = hijo.hijos[0].dato;
            let encontrado = tablaDefsVariables.find(variable => 
                variable.id.dato == id && (variable.ambito.dato == this.ambitoActual.dato || variable.ambito.dato == "*"));
            if(encontrado)
                return encontrado.tipo.dato;
            else {
                let found = false;
                let type;
                let funcion = tablaDefsFunciones.find(funcion => funcion.id.dato == this.ambitoActual.dato);
                if(funcion) {
                    tablaDefsParametros.forEach(element => {
                        
                        if(element.ambito.dato == this.ambitoActual.dato){    
                            if(element.id.dato == id){
                                found = true;
                                type = element.tipo.dato;
                            }
                        }
                    });
                }
                if(found){
                    return type;
                }
                else{
                    this.valido = false;
                    this.codigoError = 6; //variable no definida
                    this.muestraError(id);
                    return "undefined";
                }
            }
        }

        else if(hijo instanceof R37)
            return "int";

        else if(hijo instanceof R38)
            return "float";

        else if(hijo instanceof R39)
            return "char";
    }

    muestraError(id){
        switch(this.codigoError){
            case 1:
                console.log("ERROR. La funcion '" + id + "' ya esta definida");
                break;
            case 2:
                console.log("ERROR. El parametro '" + id + "' ya esta definido");
                break;
            case 3:
                console.log("ERROR. El paremetro '" + id + "' ya esta definido globalmente");
                break;
            case 4:
                console.log("ERROR. La variable '" + id + "' ya esta definida");
                break;
            case 5:
                console.log("ERROR. " + id + " no son compatibles");
                break;
            case 6:
                console.log("ERROR. La variable '" + id + "' no esta definida");
                break;
            case 7:
                console.log("ERROR. R24 La funcion '" + id.id.dato + "' esperaba retornar un tipo de dato '" + id.tipo.dato + "'");
                break;
            case 8:
                console.log("ERROR. La funcion '" + id + "' no esta definida");
                break;
            case 9:
                console.log("ERROR. El numero de parametros y argumentos de la funcion '" + id + "' no coincide");
                break;
        }
    }
}