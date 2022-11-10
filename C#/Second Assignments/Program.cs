 
using System;
using System.ComponentModel.DataAnnotations;

namespace Second_Assg
{
   public class Program
    {
        //main method 
        static void Main(string[] args)
        {
            Console.WriteLine("First program");
            RegexPattrn r = new RegexPattrn();
            r.validateEmail();
            //------------------------------//
            Console.WriteLine("Second program");
            TextFiles textFiles = new TextFiles();
            textFiles.readTextFile();
                      

        }
    }
}
