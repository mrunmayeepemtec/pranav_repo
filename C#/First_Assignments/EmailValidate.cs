using System;
using System.Text.RegularExpressions;

public class EmailValidate
{
    string email = "Abc@xyz.com";
    public void validateEmail()
	{
        
        Regex regex = new Regex(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
        RegexOptions.CultureInvariant | RegexOptions.Singleline);
        Console.WriteLine($"The email is {email}");
        bool isValidEmail = regex.IsMatch(email);
        if (!isValidEmail)
        {
            Console.WriteLine($"The email is invalid");
        }
        else
        {
            Console.WriteLine($"The email is valid");
        }
        
    }

}
