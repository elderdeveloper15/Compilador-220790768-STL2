export class Lexico {
    
    constructor(src) {
        this.continue = true;
        this.src = src || "$";  //pipe || por si src es undefined

        this.estado = 0;
        this.index = 0;
        this.tipo = -1;
        
        this.char = "";
        this.cad = "";
        this.simbolo = "";   
    }

    nextChar () {
        if(this.index != this.src.length)
            return this.src[this.index++];     
        return "$";
    }

    goBack() {
        if (!this.end() && !this.isSpace())
            this.index -= 1;
    }

    end() {  return this.char == "$"; }

    estadoAcept() { this.continue = false; }
    
    getSimbolo() {
        this.continue = true;

        this.tipo = -1;
        this.estado = 0;

        this.cad = "";
        this.simbolo = "";
       

        while(this.continue) {
            this.char = this.nextChar();
            switch (this.estado) {
                case 0:                 //el caso 0 analiza el primer caracter de cad

                    if(this.isSpace()) {
                        break;
                    } else if(this.isAlpha()) {    //puede ser id o reservada
                        this.estado = 1;
                        this.cad += this.char;
                        break;
                    } else if(this.isDigit()) {    //puede ser entero o real
                        this.estado = 2;
                        this.cad += this.char;
                        break;
                    } else if(this.isSuma()) {     // + -
                        this.estado = 5;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.isMul()) {      // / *
                        this.estado = 6;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.isRelational()) {    //< > <= >=
                        this.estado = 7;
                        this.cad += this.char;
                        break;
                    } else if(this.char == "|") {   //||
                        this.estado = 8;
                        this.cad += this.char;
                        break;
                    } else if(this.char == "&") {   //&&
                        this.estado = 9;
                        this.cad += this.char;
                        break;
                    } else if(this.char == "!") {   //!= !
                        this.estado = 10;
                        this.cad += this.char;
                        break;
                    } else if(this.char == "=") {   // = ==
                        this.estado = 18;
                        this.cad += this.char;
                        break;
                    } else if(this.char == ";") {
                        this.estado = 12;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.char == ",") {
                        this.estado = 13;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.char == "(") {
                        this.estado = 14;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.char == ")") {
                        this.estado = 15;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.char == "{") {
                        this.estado = 16;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.char == "}") {
                        this.estado = 17;
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else if(this.end()) {
                        this.estadoAcept(this.estado);
                        this.cad += this.char;
                        break;
                    } else{                             //^%#@_
                        this.cad += this.char;
                        this.estado = -1;
                        this.estadoAcept(this.estado);
                        break;
                    }
                case 1: 
                    if(this.isAlpha() || this.isDigit()) {
                        this.cad += this.char;
                        break;
                    } else {
                        this.estado = this.isReserved();
                        this.goBack();                      //siempre se hace goBack para volver a leer el caracter que se salto
                        this.estadoAcept(this.estado);
                        break;
                    }

                case 2: 
                    if(this.isDigit()) {
                        this.cad += this.char;
                        break;
                    } else if (this.char == "."){   //puede ser real
                        this.estado = 3;
                        this.cad += this.char;
                        break;
                    } else {                        //es entero
                        this.goBack();
                        this.estadoAcept(this.estado);
                        break;
                    }

                case 3:
                    let termina;            //para que no termine en . 
                    if(this.isDigit()) {
                        this.cad += this.char;
                        break;
                    } else if(this.end()) {
                        termina = this.index - 1;
                    } else {
                        termina = this.index -2;
                    }

                    if(this.src[termina] == ".") //verifica que el numero real no termine en .
                        this.estado = -1;

                    this.goBack();
                    this.estadoAcept(this.estado);
                    break;

                case 7:
                    if(this.char == "=") {              // <= >=
                        this.cad += this.char;
                        this.estadoAcept(this.estado);
                        break;
                    } else {
                        this.goBack();                  // < >
                        this.estadoAcept(this.estado);
                    }
                    break;

                case 8:
                    if(this.char == "|") {
                        this.cad += this.char;
                    } else {
                        this.estado = -1;
                        this.goBack();
                    }
                    this.estadoAcept(this.estado);
                    break;

                case 9:
                    if(this.char == "&") {
                        this.cad += this.char;
                    } else {
                        this.estado = -1;
                        this.goBack();
                    }
                    this.estadoAcept(this.estado);
                    break;

                case 10:
                    if(this.char == "=") {
                        this.cad += this.char;
                        this.estado = 11;
                    } else {
                        this.goBack();
                    }
                    this.estadoAcept(this.estado);
                    break;

                case 18:
                    if(this.char == "=") {
                        this.cad += this.char;
                        this.estado = 11;
                    } else {
                        this.goBack();
                    }
                    this.estadoAcept(this.estado);
                    break;

                default:
                    break;
            }
        }

        this.fillInfo();
    }

    isDigit() { return (this.char.match(/[0-9]/)); }

    isAlpha() { return (this.char.match(/[a-z]/i)); }

    isSuma() { return (this.char.match(/[-+]/)); }

    isMul() { return (this.char.match(/[*/]/)); }

    isSpace() { return this.char == " "; }

    isRelational() { return (this.char.match(/[<>]/)); }  

    isReserved() {
        if (this.cad == "float" || this.cad == "void" || this.cad == "int")
            return 4;
        else if(this.cad == "if")
            return 19;
        else if(this.cad == "while")
            return 20;
        else if(this.cad == "return")
            return 21;
        else if(this.cad == "else")
            return 22;
        else
            return 1;   //si no es ninguna reservada, entonces es un id
    }  

    fillInfo(){
        switch (this.estado) { 
            case 0:
                this.tipo = 23; //100  2 $
                this.simbolo = "null";
                break;
            case 1:
                this.tipo = 0;
                this.simbolo = "Id";
                break;
            case 2:
                this.tipo = 1;
                this.simbolo = "Entero";
                break;
            case 3:
                this.tipo = 2;
                this.simbolo = "Real";
                break;       
            case 4:
                this.tipo = 4;
                this.simbolo = "Tipo";
                break;
            case 5:
                this.tipo = 5; // 5
                this.simbolo = "OpSum";
                break;
            case 6:
                this.tipo = 6;
                this.simbolo = "OpMul";
                break;
            case 7:
                this.tipo = 7;
                this.simbolo = "OpRelac";
                break;
            case 8:
                this.tipo = 8;
                this.simbolo = "OpOr";
                break;
            case 9:
                this.tipo = 9;
                this.simbolo = "OpAnd";
                break;
            case 10:
                this.tipo = 10;
                this.simbolo = "OpNot";
                break;
            case 11:
                this.tipo = 11;
                this.simbolo = "OpIgualdad";
                break;
            case 18:
                this.tipo = 18;
                this.simbolo = "=";
                break;
            case 12:
                this.tipo = 12;
                this.simbolo = ";";
                break;
            case 13:
                this.tipo = 13;
                this.simbolo = ",";
                break;        
            case 14:
                this.tipo = 14;
                this.simbolo = "(";
                break;
            case 15:
                this.tipo = 15;
                this.simbolo = ")";
                break;
            case 16:
                this.tipo = 16;
                this.simbolo = "{";
                break;
            case 17:
                this.tipo = 17;
                this.simbolo = "}";
                break;
            case 19:
                this.tipo = 19;
                this.simbolo = "if";
                break;
            case 20:
                this.tipo = 20;
                this.simbolo = "while";
                break;
            case 21:
                this.tipo = 21;
                this.simbolo = "return";
                break;
            case 22:
                this.tipo = 22;
                this.simbolo = "else";
                break;
            case -1:
                this.tipo = -1;
                this.simbolo = "Error"
                break;
            default:
                break;
        }
    }

    
}