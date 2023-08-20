using System;

class LexicalAnalyzer
{
    static void Main(string[] args)
    {
        Console.Write("Ingrese una expresión: ");
        string input = Console.ReadLine();

        bool isParsingReal = false;
        bool isParsingNumber = false;
        string numberBuffer = "";
        
        foreach (char token in input)
        {
            if (char.IsDigit(token))
            {
                numberBuffer += token;
                isParsingNumber = true;
            }
            else if (token == '.')
            {
                if (isParsingReal)
                {
                    Console.WriteLine("Token no reconocido");
                    continue;
                }
                isParsingReal = true;
                numberBuffer += token;
            }
            else if (char.IsLetter(token))
            {
                if (char.IsUpper(token))
                {
                    Console.WriteLine($"Letra mayúscula: {token}");
                }
                else if (char.IsLower(token))
                {
                    Console.WriteLine($"Letra minúscula: {token}");
                }
            }
            else if (token == '+' || token == '-')
            {
                if (isParsingNumber)
                {
                    if (isParsingReal)
                    {
                        Console.WriteLine($"Real: {numberBuffer}");
                    }
                    else
                    {
                        Console.WriteLine($"Entero: {numberBuffer}");
                    }

                    isParsingReal = false;
                    isParsingNumber = false;
                    numberBuffer = "";
                }

                Console.WriteLine($"Operador: {token}");
            }
            else
            {
                Console.WriteLine("Token no reconocido");
            }
        }

        if (isParsingNumber)
        {
            if (isParsingReal)
            {
                Console.WriteLine($"Real: {numberBuffer}");
            }
            else
            {
                Console.WriteLine($"Entero: {numberBuffer}");
            }
        }
    }
}
