internal class ArithmaticOperations
{ 

   static int num1 = 15;
   static  int num2 = 5;
    
    //Addition
   static void add()
    {
        Console.WriteLine("Addition is "+num1 + num2);
    }
    //Substaction
    static void sub()
    {
        Console.WriteLine(num1 - num2);
    }
    //multiplication
    static void mul()
    {
        Console.WriteLine(num1 * num2);
    }
    //division
    static void divi()
    {
        Console.WriteLine(num1 / num2);
    }

    private static void Main(string[] args)
    {
        add();
        mul();  
        divi();
        sub();   
    }
}