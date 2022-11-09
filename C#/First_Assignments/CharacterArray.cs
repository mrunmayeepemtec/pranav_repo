using First_Assignments;
using System;
using System.Linq;

public class CharacterArray {

    static char[] ch1 = { 'p', 'r', 'a', 'n', 'a', 'v' };
    static char[] ch2 = { 'a', 'b', 'c', 'd', 'e' };

    //Compare Two Arrays
    public void compareArray()
    {
        Console.WriteLine(ch1.SequenceEqual(ch2));
    }

    //concate Array to String
    static void concateArray(String[] args)
    {
        char[] ch1 = { 'E', 'M', 'T', 'E', 'C' };
        string str = string.Concat(ch1);
        Console.WriteLine(str);
    }

}