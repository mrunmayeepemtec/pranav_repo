using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArithmaticOperationFramework
{
    public class ArithmaticOperations
    {
        static int num1 = 15;
        static int num2 = 5;

        //Addition
        static void add()
        {
            Console.WriteLine("Addition is : " + (num1 + num2));
        }
        //Substaction
        static void sub()
        {
            Console.WriteLine("substraction is : " + (num1 - num2));
        }
        //multiplication
        static void mul()
        {
            Console.WriteLine("multilication is : " + (num1 * num2));
        }
        //division
        static void divi()
        {
            Console.WriteLine("division is : " + (num1 / num2));
        }

        private static void Main(string[] args)
        {
            add();
            mul();
            divi();
            sub();
        }
    } }

