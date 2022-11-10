using System;

using System.IO;
namespace Second_Assg
{
   public  class TextFiles : Program
    {
        //read text file line by line method
        public void readTextFile()
        {
             string textFile = @"C:\C#\Second_Assg\Info.txt";
            if (File.Exists(textFile))
            {
                // Read a text file line by line.  
                string[] lines = File.ReadAllLines(textFile);
                foreach (string line in lines)
                    Console.WriteLine(line);
            }
            else {
                Console.WriteLine("Enter Correct location");
            }

        }
    }
}