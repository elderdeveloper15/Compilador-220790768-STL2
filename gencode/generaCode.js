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

export class GenCode{
    constructor(){    
        this.asm = [];
        this.aux = [];
        this.toOrder = [];
        this.headFuncs = [];
        this.varsGlobs = [];
        this.vars = [];

        this.strAux = ""; this.ambito = "*";
        this.unoAntes = false; this.firstTime = true;

        this.contadorOP = 0; this.funcs = 0; this.opc = 1;
        this.contAr = 0; this.contIf = 0; this.contWhile = 0;
    }

    generaCodigo(){
        this.generaCabecera();
        //console.log("empezando a generar");
        const arch = new Blob(this.asm, { type: 'text/plain' }); 
        return arch;
    }

    generaCabecera(){
        this.asm.push(".MODEL SMALL\n.STACK 100H\n.DATA\n");
        this.asm.push("\n");
        this.asm.push("VARG DW ?\n");
        this.asm.push("VARF DW ?\n");
        this.asm.push("VARPRINT DW ?\n");
        this.asm.push("NPRINT DW ?\n");
        this.asm.push("RESULT DW 100 DUP(0)\n");
        this.asm.push("ARGUMENT DW 100 DUP(0)\n");
        this.asm.push("CONT DW 0\n");

        this.buscaEnArbol(this.arbol.hijos);
        this.buscaFuncs(this.arbol.hijos);

        this.separateInFuncs();
        this.addInOrder();

        //console.log(this.variables);
        //console.log(this.aux);
        //console.log(this.strAux);
        // console.log("_______");
        //console.log(this.toOrder);
        //console.log(this.headFuncs);
        //console.log(this.asm);

        this.showOrdered();
        this.asm.push("\n\n");
        this.addStart();
        this.addFunciones();
    }

    buscaEnArbol(hijos){
        if(typeof hijos != "undefined"){
            for(let i = 0; i < hijos.length; i++){
                if(hijos[i].dato == "DefVar") {
                    let tipo = hijos[i].hijos[0].dato;
                    let id = hijos[i].hijos[1].dato;
                    this.tipo = tipo;

                    this.addVar(tipo, id, this.ambito);
                }

                if(hijos[i].dato == "ListaVar") {
                    if(hijos[i].hijos.length != 0) {
                        let tipo = this.tipo;
                        let id = hijos[i].hijos[1].dato;
                        this.addVar(tipo, id, this.ambito);
                    }
                }

                if(hijos[i].dato == "DefFunc") {
                    this.ambito = hijos[i].hijos[1].dato;
                    // let id = hijos[i].hijos[1].dato;
                    // this.asm.push(id + " MACRO ");
                    // this.checkFunc(hijos[i].hijos);
                    // this.asm.push("\nENDM\n\n");
                }

                this.buscaEnArbol(hijos[i].hijos);
            }
        }
    }

    buscaFuncs(hijos){
        if(typeof hijos != "undefined"){
            for(let i = 0; i < hijos.length; i++){
                if(hijos[i].dato == "DefFunc") {
                    this.ambito = hijos[i].hijos[1].dato;
                    let id = hijos[i].hijos[1].dato;
                    this.strAux = this.strAux +(id + " MACRO " + "\n@\n");
                    this.checkFunc(hijos[i].hijos);       
                    this.strAux = this.strAux +("|");
                }
                this.buscaFuncs(hijos[i].hijos);
            }
        }
    }

    separateInFuncs(){
        let str = "";
        for(let i = 0; i < this.strAux.length; i++){
            if(this.strAux[i] == '|'){
                this.aux.push(str + '|')
                str = "";
            }
            else{
                str = str + this.strAux[i];
            }
        }
    }

    addInOrder(){
        let str = "";
        for(let i = 0; i < this.aux.length; i++){
            for(let j = 0; j < this.aux[i].length ; j++){
                if(this.aux[i][j] == '$'){
                    this.toOrder.push(str);
                    str = "";
                }
                else if(this.aux[i][j] == '@'){
                    if(str != '\n')
                        this.headFuncs.push(str);
                    str = "";
                }
                else if(this.aux[i][j] == '|'){
                    this.toOrder.push('$');
                }
                else{
                    str = str + this.aux[i][j];
                }
            }
        }
        this.toOrder.unshift('$');
        this.toOrder.push(str);
        str = "";
    }

    showOrdered(){
        for(let i = this.toOrder.length; i > -1 ; i--){
            if(this.toOrder[i] == '$'){
                if(this.firstTime){
                    this.asm.push(this.headFuncs.pop());
                    this.firstTime = false;
                }
                else{
                    this.asm.push("\nENDM\n");
                    this.asm.push(this.headFuncs.pop());
                }
            }
            else{
                this.asm.push(this.toOrder[i]);
            }
        }
    }

    checkFunc(hijos){
        if(typeof hijos != "undefined"){
            for(let i = 0; i < hijos.length; i++){
                if(hijos[i].dato == "Params") {
                    //console.log(hijos[i])
                    if(!hijos[i] instanceof R10){
                        if(hijos[i].hijos.length != 0) {
                            let id = hijos[i].hijos[1].dato;
                            this.addParam("", id, this.ambito);
                        }
                    }
                }

                if(hijos[i].dato == "ListaParam") {
                    if(hijos[i].hijos.length != 0) {
                        let id = hijos[i].hijos[2].dato;
                        this.addParam(", ", id, this.ambito);
                    }
                }

                if(hijos[i].dato == "Sentencia") {
                    //this.asm.push("\n");
                    this.getSentencia(hijos[i]);
                }

                if(hijos[i].dato != "Sentencia") {
                    this.checkFunc(hijos[i].hijos);
                }

            }
        }
    }

    getSentencia(sentencia){
        //console.log(sentencia)
        if(sentencia instanceof R21) {
            let id = sentencia.hijos[0].dato;
            if(this.varsGlobs.includes(id)) {
                id += "0";
            } else {
                id += this.ambito;
            }
            this.contadorOP = 0;
            let contenido = this.getExp(sentencia.hijos[2]);

            //aqui

            if(contenido == "VARF" || contenido != "AX") {
                this.strAux = this.strAux + "MOV BX, " + contenido + "\n";
                contenido = "BX";
            }
            this.strAux = this.strAux + "MOV " + id + ", " + contenido + "\n";
            if(this.unoAntes){
                this.strAux = this.strAux + "\n";
                this.unoAntes = false;
            }else{
                this.strAux = this.strAux + "$\n";         
            }
        } 
        else if(sentencia instanceof R22) {
            let resultado = this.getExp(sentencia.hijos[2]);
            let ifNum = this.contIf;
            this.contIf++;
            this.strAux = this.strAux + "LOCAL ENDIF" + ifNum + "\n";
            this.strAux = this.strAux + "MOV AX, " + resultado + "\n";
            this.strAux = this.strAux + "MOV BX, 0" + "\n";
            this.strAux = this.strAux + "CMP AX, BX" + "\n";
            this.strAux = this.strAux + "JE ENDIF" + ifNum+ "\n";
            this.unoAntes = true;
            this.addBloque(sentencia.hijos[4]);
            this.strAux = this.strAux + "JMP END" + ifNum+ "\n";
            this.strAux = this.strAux + "ENDIF" + ifNum+ ":\n";
            this.unoAntes = true;
            this.addElse(sentencia.hijos[5]);           
            this.strAux = this.strAux + "END" + ifNum+ ":\n";
            this.strAux = this.strAux + "$\n";
        }
        else if(sentencia instanceof R23) {
            let whileNum = this.contWhile;
            this.contWhile++;
            this.strAux = this.strAux + "LOCAL ENDWHILE" + whileNum + "\n";
            this.strAux = this.strAux + "LOCAL BEGWHILE" + whileNum + "\n";
            this.strAux = this.strAux + "BEGWHILE" + whileNum+ ":\n";
            let resultado = this.getExp(sentencia.hijos[2]);          
            this.strAux = this.strAux + "MOV AX, " + resultado + "\n";
            this.strAux = this.strAux + "MOV BX, 0" + "\n";
            this.strAux = this.strAux + "CMP AX, BX" + "\n";
            this.strAux = this.strAux + "JNE ENDWHILE" + whileNum+ "\n";
            this.unoAntes = true;
            this.getSentencias(sentencia.hijos[4].hijos[1]);
            this.strAux = this.strAux + "JMP BEGWHILE" + whileNum+ "\n";
            this.strAux = this.strAux + "ENDWHILE" + whileNum+ ":\n";         
            this.strAux = this.strAux + "$\n";
        }
        else if(sentencia instanceof R24) {
            this.strAux = this.strAux + "MOV VARF, 0\n";
            if(sentencia.hijos[1].hijos.length != 0) {
                let contenido = this.getExp(sentencia.hijos[1].hijos[0]);
                this.strAux = this.strAux + "MOV AX, " + contenido + "\n";
                this.strAux = this.strAux + "MOV VARF, AX";
            }
            this.strAux = this.strAux + "$\n";
        }
        else if(sentencia instanceof R25) {
            this.contAr = 0;
            this.addLlamadaFunc(sentencia.hijos[0]); 
        }
    }

    addBloque(sentBloque){
        if(sentBloque.hijos[0].dato == "Sentencia") {
            this.getSentencia(sentBloque.hijos[0]);
        } else if(sentBloque.hijos[0].dato == "Bloque"){
            this.getSentencias(sentBloque.hijos[0].hijos[1]);
        }
    }

    getSentencias(sentencia){
        if(sentencia.hijos.length != 0) {
            this.getSentencia(sentencia.hijos[1]);
            this.getSentencias(sentencia.hijos[0]);
        }
    }

    addElse(tElse){
        //console.log(tElse)
        if(tElse.hijos.length != 0) {
            this.addBloque(tElse.hijos[0]);
        }
    }

    getExp(expresion){
        if(expresion instanceof R43) 
            return this.getExp(expresion.hijos[1]);

        else if(expresion instanceof R44) {
            let contenido = this.getExp(expresion.hijos[1]);
            if(expresion.hijos[0].dato == "+") {
                this.strAux = this.strAux + ("ADD AX, " + contenido + "\n");
            } else if(expresion.hijos[0].dato == "-") {
                this.strAux = this.strAux + ("SUB AX, " + contenido + "\n");
            }
            this.strAux = this.strAux + ("MOV RESULT[" + this.contadorOP + "], AX\n");
            contenido = "RESULT[" + this.contadorOP + "]";
            this.contadorOP += 2;
            return contenido;
        } 

        else if(expresion instanceof R45) {
            let contenido = this.getExp(expresion.hijos[1]);
            this.strAux = this.strAux + ("MOV AX, " + contenido + "\n");
            this.strAux = this.strAux + ("NEG AX" +"\n");
            this.strAux = this.strAux + ("MOV RESULT[" + this.contadorOP + "], AX\n");
            contenido = "RESULT[" + this.contadorOP + "]";
            this.contadorOP += 2;
            return contenido;
        }


        else if(expresion instanceof R46 || expresion instanceof R47 || expresion instanceof R48
            || expresion instanceof R49 || expresion instanceof R50 || expresion instanceof R51) {
            let contenido1 = this.getExp(expresion.hijos[0]);
            if(contenido1 == "AX") {
                this.strAux = this.strAux + ("MOV RESULT[" + this.contadorOP + "], AX\n");
                contenido1 = "RESULT[" + this.contadorOP + "]";
                this.contadorOP += 2;
            }
            let contenido2 = this.getExp(expresion.hijos[2]);
            if(contenido2 == "AX") {
                this.strAux = this.strAux + ("MOV RESULT[" + this.contadorOP + "], AX\n");
                contenido2 = "RESULT[" + this.contadorOP + "]";
                this.contadorOP += 2;
            }

            let op = expresion.hijos[1].dato;
            if(op == "+") {
                this.strAux = this.strAux + ("MOV AX, " + contenido1 + "\n");
                this.strAux = this.strAux + ("MOV BX, " + contenido2 + "\n");
                this.strAux = this.strAux + ("ADD AX, BX" + "\n");
                return "AX";

            } else if(op == "-") {
                this.strAux = this.strAux + ("MOV AX, " + contenido1 + "\n");
                this.strAux = this.strAux + ("MOV BX, " + contenido2 + "\n");
                this.strAux = this.strAux + ("SUB AX, BX" + "\n");
                return "AX";

            } else if(op == "*") {
                this.strAux = this.strAux + ("MOV AX, " + contenido1 + "\n");
                this.strAux = this.strAux + ("MOV BX, " + contenido2 + "\n");
                this.strAux = this.strAux + ("MUL BX" + "\n");
                return "AX";

            } else if(op == "/") {
                this.strAux = this.strAux + ("MOV DX, 0" + "\n");
                this.strAux = this.strAux + ("MOV AX, " + contenido1 + "\n");
                this.strAux = this.strAux + ("MOV BX, " + contenido2 + "\n");
                this.strAux = this.strAux + ("DIV BX" + "\n");
                return "AX";

            } else if(op == "<") {
                this.strAux = this.strAux + ("MEN " + contenido1 + ", " + contenido2 + "\n");
                this.strAux = this.strAux + ("MOV AX, VARG" + "\n");
                return "AX";

            } else if(op == ">") {
                this.strAux = this.strAux + ("MAY " + contenido1 + ", " + contenido2 + "\n");
                this.strAux = this.strAux + ("MOV AX, VARG" + "\n");
                return "AX";

            } else if(op == "<=") {
                this.strAux = this.strAux + ("MENIG " + contenido1 + ", " + contenido2 + "\n");
                this.strAux = this.strAux + ("MOV AX, VARG" + "\n");
                return "AX";

            } else if(op == ">=") {
                this.strAux = this.strAux + ("MAYIG " + contenido1 + ", " + contenido2 + "\n");
                this.strAux = this.strAux + ("MOV AX, VARG" + "\n");
                return "AX";

            }else if(op == "==") {
                this.strAux = this.strAux + ("IGUAL " + contenido1 + ", " + contenido2 + "\n");
                this.strAux = this.strAux + ("MOV AX, VARG" + "\n");
                return "AX";

            } else if(op == "!=") {
                this.strAux = this.strAux + ("NOIGUAL " + contenido1 + ", " + contenido2 + "\n");
                this.strAux = this.strAux + ("MOV AX, VARG" + "\n");
                return "AX";

            } else if(op == "||") {
                this.strAux = this.strAux + ("MOV AX, " + contenido1 + "\n");
                this.strAux = this.strAux + ("MOV BX, " + contenido2 + "\n");
                this.strAux = this.strAux + ("OR AX, BX" + "\n");
                return "AX";

            } else if(op == "&&") {
                this.strAux = this.strAux + ("MOV AX, " + contenido1 + "\n");
                this.strAux = this.strAux + ("MOV BX, " + contenido2 + "\n");
                this.strAux = this.strAux + ("AND AX, BX" + "\n");
                return "AX";

            }

        } else if(expresion instanceof R52)
            return this.getTer(expresion.hijos[0]);
    }

    getTer(termino){
        if(termino instanceof R35) {
            this.contAr = 0;
            //llamadaFuncTerm = true;
            //this.strAux = this.strAux + termino.hijos[0].hijos[0].dato; + "$";
            return this.addLlamadaFunc(termino.hijos[0]);
        }
        else if(termino instanceof R36) {
            if(this.varsGlobs.includes(termino.hijos[0].dato)) {
                return(termino.hijos[0].dato + "0");
            } else {
                return(termino.hijos[0].dato + this.ambito);
            }
        }
        else if(termino instanceof R37)
            return termino.hijos[0].dato;
        else if(termino instanceof R38)
            return Math.round(termino.hijos[0].dato);
        else if(termino instanceof R39) {
            return "'" + termino.hijos[0].dato.replace(new RegExp('"', 'g'), "") + "'";
        }
    }

    addLlamadaFunc(llamFunc){
        this.strAux = this.strAux + "MOV VARF, 0\n";
        let id = llamFunc.hijos[0].dato;
        let listaArgumentos = this.addArgs(llamFunc.hijos[2]);

        // if(!llamadaFuncTerm){
        //     this.strAux = this.strAux + id + "$";
        // }
        // else{
        //     llamadaFuncTerm = false;
        // }

        this.strAux = this.strAux + id + "$";
        for (let i = 0; i < listaArgumentos.length; i++) {
            if(i != 0) {
                this.strAux = this.strAux + (", " + listaArgumentos[i]);
            } else {
                this.strAux = this.strAux + (" " + listaArgumentos[i]);
            }
        }
        this.strAux = this.strAux + "\n";
        return "VARF";
    }

    addArgs(args){
        let argsList = [];
        if(args.hijos.length != 0) {
            let i = 0;
            if(args.hijos[0] instanceof Terminal)
                i++;

            this.contadorOP = 0;    
            let exp = this.getExp(args.hijos[i]);
            if(exp == "AX") {
                this.strAux = this.strAux + ("MOV ARGUMENT[" + this.contAr + "], AX\n");
                exp = "ARGUMENT[" + this.contAr + "]";
                this.contAr += 2;
            }
            argsList.unshift(exp);
            argsList = [...argsList, ...this.addArgs(args.hijos[i + 1])]
        }
        return argsList;
    }

    addParam(sm, param, ambito){
        this.strAux = this.strAux + (sm + param + ambito);
    }

    addVar(tipo, id, ambito) {
        if(ambito == "*") {
            this.asm.push(id + "0");
            this.asm.push(id);
        } else {
            this.asm.push(id + ambito);
        }

        if(tipo == "int") {
            this.asm.push(" DW ?\n");
        } else if(tipo == "float") {
            this.asm.push(" Dw ?\n");
        } else if(tipo == "void") {
            this.asm.push(" DW 0\n");
        } else if(tipo == "char") {
            this.asm.push(" DW ?\n");
        }

        let newVar = {tipo: tipo, id: id, ambito: ambito}
        this.vars.push(newVar);
    }

    addStart(){
        this.asm.push(".CODE\n");
        this.asm.push("CODEP PROC FAR\n");
        this.asm.push("MOV AX,@DATA\nMOV DS,AX\n");
        this.asm.push("main\n");
        this.printVars();
        this.asm.push("\nCODEP ENDP\n");
    }

    printVars(){
        this.vars.forEach(variable => {
            let nombre = variable.id;
            if(variable.ambito == "*") {
                nombre += "0";
            } else {
                nombre += variable.ambito;
            }
            nombre.split("").forEach(caracter => {
                this.asm.push("PRINTCH '" + caracter + "'" + "\n");
            });
            this.asm.push("PRINTCH ':'" + "\n");
            this.asm.push("PRINTCH ' '" + "\n");
            if(variable.tipo == "int" || variable.tipo == "float" || variable.tipo == "void") {
                this.asm.push("PRINTININT " + nombre + "\n");
            }
            else if(variable.tipo == "char") {
                this.asm.push("PRINTINCH " + nombre + "\n");
            }

        });
    }

    addFunciones() {
        this.asm.push("PRINTN MACRO NUM1" + "\n");
        this.asm.push("MOV DL, NUM1" + "\n");
        this.asm.push("MOV AH, 02H" + "\n");
        this.asm.push("ADD DL, 30H" + "\n");
        this.asm.push("INT 21H" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("PRINTCH MACRO CHAR" + "\n");
        this.asm.push("MOV DL, CHAR" + "\n");
        this.asm.push("MOV AH, 02H" + "\n");
        this.asm.push("INT 21H" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("PRINTINCH MACRO CHAR1" + "\n");
        this.asm.push("MOV AX, CHAR1" + "\n");
        this.asm.push("MOV DL, AH" + "\n");
        this.asm.push("MOV AH, 02H" + "\n");
        this.asm.push("INT 21H" + "\n");
        this.asm.push("MOV AX, CHAR1" + "\n");
        this.asm.push("MOV DL, AL" + "\n");
        this.asm.push("MOV AH, 02H" + "\n");
        this.asm.push("INT 21H" + "\n");
        this.asm.push("PRINTCH 0AH" + "\n");
        this.asm.push("PRINTCH 0DH" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("PRINTININT MACRO NUM1" + "\n");
        this.asm.push("MOV AX, NUM1" + "\n");
        this.asm.push("MOV NPRINT, AX" + "\n");
        this.asm.push("MOV DX, 0" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("MOV BX, 10000" + "\n");
        this.asm.push("DIV BX" + "\n");
        this.asm.push("MOV VARPRINT, AX" + "\n");
        this.asm.push("PRINTN AL" + "\n");
        this.asm.push("MOV AX, VARPRINT" + "\n");
        this.asm.push("MOV BX, 10000" + "\n");
        this.asm.push("MUL BX" + "\n");
        this.asm.push("MOV BX, AX" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("SUB AX, BX" + "\n");
        this.asm.push("MOV NPRINT, AX" + "\n");
        this.asm.push("MOV DX, 0" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("MOV BX, 1000" + "\n");
        this.asm.push("DIV BX" + "\n");
        this.asm.push("MOV VARPRINT, AX" + "\n");
        this.asm.push("PRINTN AL" + "\n");
        this.asm.push("MOV AX, VARPRINT" + "\n");
        this.asm.push("MOV BX, 1000" + "\n");
        this.asm.push("MUL BX" + "\n");
        this.asm.push("MOV BX, AX" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("SUB AX, BX" + "\n");
        this.asm.push("MOV NPRINT, AX" + "\n");
        this.asm.push("MOV DX, 0" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("MOV BX, 100" + "\n");
        this.asm.push("DIV BX" + "\n");
        this.asm.push("MOV VARPRINT, AX" + "\n");
        this.asm.push("PRINTN AL" + "\n");
        this.asm.push("MOV AX, VARPRINT" + "\n");
        this.asm.push("MOV BX, 100" + "\n");
        this.asm.push("MUL BX" + "\n");
        this.asm.push("MOV BX, AX" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("SUB AX, BX" + "\n");
        this.asm.push("MOV NPRINT, AX" + "\n");
        this.asm.push("MOV DX, 0" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("MOV BX, 10" + "\n");
        this.asm.push("DIV BX" + "\n");
        this.asm.push("MOV VARPRINT, AX" + "\n");
        this.asm.push("PRINTN AL" + "\n");
        this.asm.push("MOV AX, VARPRINT" + "\n");
        this.asm.push("MOV BX, 10" + "\n");
        this.asm.push("MUL BX" + "\n");
        this.asm.push("MOV BX, AX" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("SUB AX, BX" + "\n");
        this.asm.push("MOV NPRINT, AX" + "\n");
        this.asm.push("MOV DX, 0" + "\n");
        this.asm.push("MOV AX, NPRINT" + "\n");
        this.asm.push("MOV BX, 1" + "\n");
        this.asm.push("DIV BX" + "\n");
        this.asm.push("MOV VARPRINT, AX" + "\n");
        this.asm.push("PRINTN AL" + "\n");
        this.asm.push("PRINTCH 0AH" + "\n");
        this.asm.push("PRINTCH 0DH" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");

        this.asm.push("IGUAL MACRO NUM1, NUM2" + "\n");
        this.asm.push("LOCAL ESIGUAL1" + "\n");
        this.asm.push("LOCAL SALIR5" + "\n");
        this.asm.push("MOV AX, NUM1" + "\n");
        this.asm.push("MOV BX, NUM2" + "\n");
        this.asm.push("CMP AX, BX" + "\n");
        this.asm.push("JE ESIGUAL1" + "\n");
        this.asm.push("MOV VARG, 0" + "\n");
        this.asm.push("JMP SALIR5" + "\n\n");
        this.asm.push("ESIGUAL1:" + "\n");
        this.asm.push("MOV VARG, 1" + "\n");
        this.asm.push("JMP SALIR5" + "\n");
        this.asm.push("SALIR5:" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("NOIGUAL MACRO NUM1, NUM2" + "\n");
        this.asm.push("LOCAL ESIGUAL2" + "\n");
        this.asm.push("LOCAL SALIR6" + "\n");
        this.asm.push("MOV AX, NUM1" + "\n");
        this.asm.push("MOV BX, NUM2" + "\n");
        this.asm.push("CMP AX, BX" + "\n");
        this.asm.push("JE ESIGUAL2" + "\n");
        this.asm.push("MOV VARG, 1" + "\n");
        this.asm.push("JMP SALIR6" + "\n\n");
        this.asm.push("ESIGUAL2:" + "\n");
        this.asm.push("MOV VARG, 0" + "\n");
        this.asm.push("JMP SALIR6" + "\n");
        this.asm.push("SALIR6:" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("MEN MACRO NUM1, NUM2" + "\n");
        this.asm.push("LOCAL ESMAYOR1" + "\n");
        this.asm.push("LOCAL ESMENOR1" + "\n");
        this.asm.push("LOCAL SALIR1" + "\n");
        this.asm.push("MOV AX, NUM1" + "\n");
        this.asm.push("MOV BX, NUM2" + "\n");
        this.asm.push("CMP AX, BX" + "\n");
        this.asm.push("JA ESMAYOR1" + "\n");
        this.asm.push("JB ESMENOR1" + "\n");
        this.asm.push("JE ESMAYOR1" + "\n\n");
        this.asm.push("ESMAYOR1:" + "\n");
        this.asm.push("MOV VARG, 0" + "\n");
        this.asm.push("JMP SALIR1" + "\n\n");
        this.asm.push("ESMENOR1:" + "\n");
        this.asm.push("MOV VARG, 1" + "\n");
        this.asm.push("JMP SALIR1" + "\n");
        this.asm.push("SALIR1:" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("MAY MACRO NUM1, NUM2" + "\n");
        this.asm.push("LOCAL ESMAYOR2" + "\n");
        this.asm.push("LOCAL ESMENOR2" + "\n");
        this.asm.push("LOCAL SALIR2" + "\n");
        this.asm.push("MOV AX, NUM1" + "\n");
        this.asm.push("MOV BX, NUM2" + "\n");
        this.asm.push("CMP AX, BX" + "\n");
        this.asm.push("JA ESMAYOR2" + "\n");
        this.asm.push("JB ESMENOR2" + "\n");
        this.asm.push("JE ESMENOR2" + "\n\n");
        this.asm.push("ESMAYOR2:" + "\n");
        this.asm.push("MOV VARG, 1" + "\n");
        this.asm.push("JMP SALIR2" + "\n\n");
        this.asm.push("ESMENOR2:" + "\n");
        this.asm.push("MOV VARG, 0" + "\n");
        this.asm.push("JMP SALIR2" + "\n");
        this.asm.push("SALIR2:" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("MAYIG MACRO NUM1, NUM2" + "\n");
        this.asm.push("LOCAL ESMAYOR3" + "\n");
        this.asm.push("LOCAL ESMENOR3" + "\n");
        this.asm.push("LOCAL SALIR3:" + "\n");
        this.asm.push("MOV AX, NUM1" + "\n");
        this.asm.push("MOV BX, NUM2" + "\n");
        this.asm.push("CMP AX, BX" + "\n");
        this.asm.push("JA ESMAYOR3" + "\n");
        this.asm.push("JB ESMENOR3" + "\n");
        this.asm.push("JE ESMAYOR3" + "\n\n");
        this.asm.push("ESMAYOR3:" + "\n");
        this.asm.push("MOV VARG, 1" + "\n");
        this.asm.push("JMP SALIR3" + "\n\n");
        this.asm.push("ESMENOR3:" + "\n");
        this.asm.push("MOV VARG, 0" + "\n");
        this.asm.push("JMP SALIR3" + "\n");
        this.asm.push("SALIR3:" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
        this.asm.push("MENIG MACRO NUM1, NUM2" + "\n");
        this.asm.push("LOCAL ESMAYOR4" + "\n");
        this.asm.push("LOCAL ESMENOR4" + "\n");
        this.asm.push("LOCAL SALIR4" + "\n");
        this.asm.push("MOV AX, NUM1" + "\n");
        this.asm.push("MOV BX, NUM2" + "\n");
        this.asm.push("CMP AX, BX" + "\n");
        this.asm.push("JA ESMAYOR4" + "\n");
        this.asm.push("JB ESMENOR4" + "\n");
        this.asm.push("JE ESMENOR4" + "\n\n");
        this.asm.push("ESMAYOR4:" + "\n");
        this.asm.push("MOV VARG, 0" + "\n");
        this.asm.push("JMP SALIR4" + "\n\n");
        this.asm.push("ESMENOR4:" + "\n");
        this.asm.push("MOV VARG, 1" + "\n");
        this.asm.push("JMP SALIR4" + "\n");
        this.asm.push("SALIR4:" + "\n");
        this.asm.push("ENDM" + "\n");
        this.asm.push("\n");
    }
}