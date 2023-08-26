using System;
using System.Collections.Generic;

class LexicalAnalyzer
{
    private string input;
    private int currentPosition;

    public string Input { get { return input; } }
    public int CurrentPosition { get { return currentPosition; } }

    public LexicalAnalyzer(string input)
    {
        this.input = input;
        this.currentPosition = 0;
    }

    public void Initialize(string input)
    {
        this.input = input;
        this.currentPosition = 0;
    }

    public Token GetNextToken()
    {
        if (currentPosition >= input.Length)
        {
            return new Token(TokenType.EndOfInput, "");
        }

        char currentChar = input[currentPosition];
        currentPosition++;

        if (char.IsDigit(currentChar))
        {
            return new Token(TokenType.Number, currentChar.ToString());
        }
        else if (currentChar == '+')
        {
            return new Token(TokenType.Operator, "+");
        }
        else if (currentChar == '-')
        {
            return new Token(TokenType.Operator, "-");
        }
        else if (char.IsLetter(currentChar))
        {
            return new Token(TokenType.Identifier, currentChar.ToString());
        }
        else
        {
            return new Token(TokenType.Unknown, currentChar.ToString());
        }
    }
}

class Sintactico
{
    private int[,] tablaLR1;
    private int[] idReglas;
    private int[] lonReglas;
    private string[] simReglas;
    private int fila;
    private int columna;
    private int accion;
    private Stack<object> pila;

    public Stack<object> Pila { get { return pila; } }


    public Sintactico(int tLR)
    {
        this.pila = new Stack<object>();
        this.fila = 0;
        this.columna = 0;
        this.accion = 0;

        switch (tLR)
        {
            case 1:
                this.tablaLR1 = new int[,] { { 2, 0, 0, 1 }, { 0, 0, -1, 0 }, { 0, 3, 0, 0 }, { 4, 0, 0, 0 }, { 0, 0, -2, 0 } };
                this.idReglas = new int[] { 3 };
                this.lonReglas = new int[] { 6 };
                this.simReglas = new string[] { "E" };
                break;

            case 2:
                this.tablaLR1 = new int[,] { { 2, 0, 0, 1 }, { 0, 0, -1, 0 }, { 0, 3, -3, 0 }, { 2, 0, 0, 4 }, { 0, 0, -2, 0 } };
                this.idReglas = new int[] { 3, 3 };
                this.lonReglas = new int[] { 6, 2 };
                this.simReglas = new string[] { "E", "E" };
                break;

            default:
                this.tablaLR1 = new int[,] { { 2, 0, 0, 1 }, { 0, 0, -1, 0 }, { 0, 3, 0, 0 }, { 4, 0, 0, 0 }, { 0, 0, -2, 0 } };
                this.idReglas = new int[] { 2 };
                this.lonReglas = new int[] { 6 };
                this.simReglas = new string[] { "E" };
                break;
        }
    }

    public void InitializeStack()
    {
        this.pila.Clear();
        this.pila.Push("$");
        this.pila.Push(0);
    }

    public void SigEntrada(int tipo)
    {
        this.fila = (int)this.pila.Peek();
        this.columna = tipo;
        this.accion = this.tablaLR1[this.fila, this.columna];
    }

    public int SigAccion(object simbolo)
    {
        if (this.accion > 0)
        {
            this.pila.Push(simbolo);
            this.pila.Push(this.accion);
            return 1;
        }
        else if (this.accion < 0)
        {
            if (this.accion == -1)
            {
                return 4;
            }

            int idRegla = Math.Abs(this.accion) - 2;

            for (int i = 0; i < this.lonReglas[idRegla]; i++)
            {
                this.pila.Pop();
            }

            this.fila = (int)this.pila.Peek();
            this.columna = this.idReglas[idRegla];
            this.accion = this.tablaLR1[this.fila, this.columna];

            this.pila.Push(this.simReglas[idRegla]);
            this.pila.Push(this.accion);
            return 2;
        }
        else
        {
            return 3;
        }
    }
}

enum TokenType
{
    Number,
    Operator,
    Identifier,
    Unknown,
    EndOfInput
}

class Token
{
    public TokenType Type { get; private set; }
    public string Value { get; private set; }

    public Token(TokenType type, string value)
    {
        Type = type;
        Value = value;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Ingrese una expresión: ");
        string input = Console.ReadLine();

        LexicalAnalyzer lexer = new LexicalAnalyzer(input);
        Sintactico parser = new Sintactico(1);

        lexer.Initialize(input);
        parser.InitializeStack();

        Console.WriteLine("Pila\t\tEntrada\t\tSalida");

        Token token;
        do
        {
            token = lexer.GetNextToken();

            if (token.Type == TokenType.Number)
            {
                parser.SigEntrada(0); // Indica que el token es un número
                int result = parser.SigAccion(token.Value);
                PrintParserStep(parser, lexer, result);
            }
            else if (token.Type == TokenType.Operator)
            {
                parser.SigEntrada(1); // Indica que el token es un operador
                int result = parser.SigAccion(token.Value);
                PrintParserStep(parser, lexer, result);
            }
            else if (token.Type == TokenType.Identifier)
            {
                parser.SigEntrada(2); // Indica que el token es un identificador
                int result = parser.SigAccion(token.Value);
                PrintParserStep(parser, lexer, result);
            }
            else if (token.Type == TokenType.Unknown)
            {
                Console.WriteLine("Token no reconocido");
            }
        } while (token.Type != TokenType.EndOfInput);

        PrintParserStep(parser, lexer, 1); // Aceptación
    }

    static void PrintParserStep(Sintactico parser, LexicalAnalyzer lexer, int accion)
    {
        Console.WriteLine($"{StackToString(parser.Pila)}\t\t{lexer.Input.Substring(lexer.CurrentPosition)}\t\t{GetActionString(accion)}");
    }

    static string StackToString(Stack<object> pila)
    {
        return string.Join("", pila.ToArray());
    }

    static string GetActionString(int action)
    {
        switch (action)
        {
            case 1:
                return "Aceptacion";
            case 2:
                return "Desplazar";
            case 3:
                return "Reducir";
            case 4:
                return "Error";
            default:
                return "Acción desconocida";
        }
    }
}
