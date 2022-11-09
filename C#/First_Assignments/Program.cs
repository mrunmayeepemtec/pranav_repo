//1.	Write a C# program that performs all string operations like COMPARE, CONCAT, SUBSTRING, REVERSE using – 
//b.	Built-in functions for ‘string’ variables


  using System;
using System.Linq;

namespace First_Assignments
{
    public class Program
    {
        static String str1 = "Hello";
		static String str2 = "world";

		//String Built_in Function


        //concate String
		static void concateString()
        {
            String s3 = String.Concat(str1," ", str2); 
            Console.WriteLine(s3);
        }
        //Calculate Length
		static void CalculateLength()
		{
			int result = str2.Length;
            Console.WriteLine("Lenth of String is :"+result);
		}
        //compare two String 
        static void compareString()
        {
            bool result = str2.Equals(str1);
            Console.WriteLine(result);
        }
		//Find SubString From String 
		static void subString()
		{
            String SubString = str1.Substring(2);
			Console.WriteLine(SubString);
		}

        //Reverse String 
        static void ReverseString()
        {
			for(int i =str1.Length-1;i>=0; i--){

                 Console.Write(str1[i] + " ");
			}
		}


		static void Main(string[] args)
        {
            concateString();
            CalculateLength();
            compareString();
            subString();
            ReverseString();
           CharacterArray c=new CharacterArray();
            c.compareArray();
            EmailValidate email=new EmailValidate();        
            email.validateEmail();
           Countries countries=new Countries();
            countries.showEnumbers();
        }
    }
}
