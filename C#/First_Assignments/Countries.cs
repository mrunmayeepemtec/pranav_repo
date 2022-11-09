//Write a C# program that demonstrates the use of Enums for countries 
	//– INDIA, AUSTRALIA, USA, JAPAN, FRANCE, ENGLAND
using System;

public class Countries
{
    enum countries
    {

        // enum data members
        INDIA, AUSTRALIA, USA, JAPAN, FRANCE, ENGLAND
    }

    public void showEnumbers()
    {
        Console.WriteLine("Value of India is " +
                                      (int)countries.INDIA);
        Console.WriteLine("Value of Australia  is " +
                                      (int)countries.AUSTRALIA);
                                    
        Console.WriteLine("Value of USA is " +
                                      (int)countries.USA);
                                 
        Console.WriteLine("Value of japan  is " +
                                      (int)countries.JAPAN);
        Console.WriteLine("Value of franse is " +
                                      (int)countries.FRANCE);
        Console.WriteLine("Value of England is " +
                                      (int)countries.ENGLAND);
    }
}
